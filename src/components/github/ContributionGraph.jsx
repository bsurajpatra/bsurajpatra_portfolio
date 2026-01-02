import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
  const [totalContributions, setTotalContributions] = useState(0);
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
          const calendar = result.data.user.contributionsCollection.contributionCalendar;
          const weeks = calendar.weeks;
          const total = calendar.totalContributions;
          const daily = weeks.flatMap((week) => week.contributionDays);
          setContributions(daily);
          setTotalContributions(total);
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

  const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  // Snake logic
  const cellSize = 12;
  const gap = 3;
  const gridWidth = weeks.length;
  const gridHeight = 7;
  const headRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef([]);

  useEffect(() => {
    if (!gridWidth || !gridHeight) return undefined;
    headRef.current = { x: Math.floor(gridWidth / 2), y: 3 };

    let raf;
    let lastTick = 0;
    const tickIntervalMs = 150;

    const loop = (t) => {
      if (t - lastTick >= tickIntervalMs) {
        const { x, y } = headRef.current;
        const directions = [
          { dx: 1, dy: 0 }, { dx: -1, dy: 0 }, { dx: 0, dy: 1 }, { dx: 0, dy: -1 }
        ];

        // Pick a semi-random but constrained direction
        const dir = directions[Math.floor(Math.random() * directions.length)];
        let nx = x + dir.dx;
        let ny = y + dir.dy;

        if (nx < 0 || nx >= gridWidth) nx = x - dir.dx;
        if (ny < 0 || ny >= gridHeight) ny = y - dir.dy;

        const next = { x: nx, y: ny };
        headRef.current = next;

        trailRef.current.unshift(next);
        if (trailRef.current.length > 8) trailRef.current.pop();

        setSnakeIndex(i => i + 1);
        lastTick = t;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [gridWidth, gridHeight]);

  if (loading) return <div className="github-loading">Analyzing commits...</div>;
  if (error) return <div className="github-error">Heatmap unavailable</div>;

  return (
    <div className="github-activity">
      <div className="activity-header">
        <h3 className="activity-title">Contribution Heatmap</h3>
        <span className="activity-count">{totalContributions} contributions in the last year</span>
      </div>

      <div className="heatmap-container">
        <div className="heatmap-wrapper">
          <div className="heatmap-labels-months">
            {monthLabels.map((m, i) => (
              <span
                key={i}
                className="month-label"
                style={{ left: `${m.index * (cellSize + gap)}px` }}
              >
                {m.label}
              </span>
            ))}
          </div>

          <div className="heatmap-grid-row">
            <div className="heatmap-labels-days">
              {dayLabels.map((d, i) => (
                <span key={i} className="day-label">{d}</span>
              ))}
            </div>

            <div className="heatmap-grid-stage">
              <div className="heatmap-grid">
                {weeks.map((week, i) => (
                  <div key={i} className="heatmap-column">
                    {week.map((day) => (
                      <div
                        key={day.date}
                        className="heatmap-cell"
                        style={{ backgroundColor: getColor(day.contributionCount) }}
                        title={`${day.contributionCount} contributions on ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="snake-layer">
                {trailRef.current.map((p, i) => (
                  <div
                    key={i}
                    className="snake-dot"
                    style={{
                      left: `${p.x * (cellSize + gap)}px`,
                      top: `${p.y * (cellSize + gap)}px`,
                      opacity: 1 - (i * 0.12),
                      transform: `scale(${1 - (i * 0.05)})`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="heatmap-footer">
            <div className="heatmap-legend">
              <span>Less</span>
              <div className="legend-cells">
                <div className="heatmap-cell" style={{ backgroundColor: "var(--gh-0)" }} />
                <div className="heatmap-cell" style={{ backgroundColor: "var(--gh-1)" }} />
                <div className="heatmap-cell" style={{ backgroundColor: "var(--gh-2)" }} />
                <div className="heatmap-cell" style={{ backgroundColor: "var(--gh-3)" }} />
                <div className="heatmap-cell" style={{ backgroundColor: "var(--gh-4)" }} />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
