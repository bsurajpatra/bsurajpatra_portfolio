import React, { useEffect, useState } from "react";

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

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


