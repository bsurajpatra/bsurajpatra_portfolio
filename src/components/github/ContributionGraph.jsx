import React, { useEffect, useRef, useState } from "react";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const USERNAME = "bsurajpatra";

const query = `
query($userName: String!) {
  user(login: $userName) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          firstDay
          contributionDays {
            contributionCount
            date
          }
        }
        months {
          name
          firstDay
          totalWeeks
        }
      }
    }
  }
}
`;

const getColor = (count) => {
  if (count === 0) return "var(--gh-0)";
  if (count < 3) return "var(--gh-1)";
  if (count < 6) return "var(--gh-2)";
  if (count < 10) return "var(--gh-3)";
  return "var(--gh-4)";
};

export default function ContributionGraph() {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [, setSnakeIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
          body: JSON.stringify({
            query,
            variables: { userName: USERNAME },
          }),
        });
        const result = await res.json();
        if (result.errors) {
          setError(result.errors);
        } else {
          const weeks = result.data.user.contributionsCollection.contributionCalendar.weeks;
          const daily = weeks.flatMap((week) => week.contributionDays);
          setContributions(daily);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const weeks = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  const firstDate = contributions[0] ? new Date(contributions[0].date) : new Date();
  const lastDate = contributions.length ? new Date(contributions[contributions.length - 1].date) : new Date();
  const yearStart = firstDate.getFullYear();
  const yearEnd = lastDate.getFullYear();
  const monthLabels = [];
  const seenMonths = new Set();
  weeks.forEach((week, index) => {
    const firstDay = week[0];
    if (firstDay) {
      const d = new Date(firstDay.date);
      const monthKey = `${d.getFullYear()}-${d.getMonth()}`;
      if (!seenMonths.has(monthKey)) {
        seenMonths.add(monthKey);
        monthLabels.push({ index, label: d.toLocaleString(undefined, { month: 'short' }) });
      }
    }
  });

  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Random-walk snake across the grid (all directions)
  const cellSize = 14; // match CSS
  const gap = 3; // match CSS
  const gridWidth = weeks.length;
  const gridHeight = 7;
  const headRef = useRef({ x: Math.max(0, Math.floor(gridWidth / 2)), y: 3 });
  const trailRef = useRef([]);

  useEffect(() => {
    if (!gridWidth || !gridHeight) return undefined;
    headRef.current = { x: Math.max(0, Math.floor(gridWidth / 2)), y: Math.max(0, Math.min(3, gridHeight - 1)) };
    trailRef.current = [];

    let raf;
    let lastTick = 0;
    const tickIntervalMs = 80;
    const loop = (t) => {
      if (t - lastTick >= tickIntervalMs) {
        const { x, y } = headRef.current;
        const neighbors = [
          { x: x + 1, y }, { x: x - 1, y }, { x, y: y + 1 }, { x, y: y - 1 },
          { x: x + 1, y: y + 1 }, { x: x + 1, y: y - 1 }, { x: x - 1, y: y + 1 }, { x: x - 1, y: y - 1 }
        ].filter((p) => p.x >= 0 && p.x < gridWidth && p.y >= 0 && p.y < gridHeight);
        const next = neighbors.length ? neighbors[Math.floor(Math.random() * neighbors.length)] : { x, y };
        headRef.current = next;
        trailRef.current.unshift(next);
        const maxLen = 12;
        if (trailRef.current.length > maxLen) trailRef.current.length = maxLen;
        setSnakeIndex((idx) => idx + 1);
        lastTick = t;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [gridWidth, gridHeight]);

  const snakeTrail = trailRef.current.map((p, i) => ({
    x: p.x * (cellSize + gap),
    y: p.y * (cellSize + gap),
    alpha: Math.max(0.3, 1 - i / Math.max(1, trailRef.current.length))
  }));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div className="github-graph-wrapper">
      <h3 className="github-graph-title">Contributions · {yearStart} - {yearEnd}</h3>
      <div className="github-graph-row">
        <div className="github-day-labels">
          {dayLabels.map((d, idx) => (
            <div key={idx}>{idx % 2 === 0 ? d : ''}</div>
          ))}
        </div>
        <div className="github-graph-container">
          <div className="github-month-labels">
            {monthLabels.map((m) => (
              <div key={m.index} className="github-month-label" style={{ left: `${m.index * 17}px` }}>{m.label}</div>
            ))}
          </div>
          <div className="github-graph-stage">
            <div className="github-graph">
              {weeks.map((week, i) => (
                <div key={i} className="github-graph-week">
                  {week.map((day) => (
                    <div
                      key={day.date}
                      className="github-graph-day"
                      title={`${day.date}: ${day.contributionCount} contributions`}
                      style={{
                        backgroundColor: getColor(day.contributionCount),
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="snake-overlay" aria-hidden="true">
              {snakeTrail.map((seg, i) => (
                <div
                  key={`seg-${i}-${seg.x}-${seg.y}`}
                  className="snake-segment"
                  style={{ left: `${seg.x}px`, top: `${seg.y}px`, opacity: seg.alpha }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '6px' }}>
        <span style={{ fontSize: '10px', color: 'var(--text-color)' }}>Less</span>
        <div className="github-graph-day" style={{ background: 'var(--gh-0)' }} />
        <div className="github-graph-day" style={{ background: 'var(--gh-1)' }} />
        <div className="github-graph-day" style={{ background: 'var(--gh-2)' }} />
        <div className="github-graph-day" style={{ background: 'var(--gh-3)' }} />
        <div className="github-graph-day" style={{ background: 'var(--gh-4)' }} />
        <span style={{ fontSize: '10px', color: 'var(--text-color)' }}>More</span>
      </div>
    </div>
  );
}


