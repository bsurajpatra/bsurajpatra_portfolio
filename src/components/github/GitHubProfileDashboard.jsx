import React, { useEffect, useState } from "react";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const USERNAME = "bsurajpatra";

const query = `
query($userName: String!) {
  user(login: $userName) {
    login
    bio
    avatarUrl
    company
    location
    websiteUrl
    followers { totalCount }
    following { totalCount }
    publicRepos: repositories(privacy: PUBLIC) { totalCount }
    ownedPublicRepos: repositories(ownerAffiliations: OWNER, privacy: PUBLIC) { totalCount }
    ownedPublicNonForkRepos: repositories(isFork: false, ownerAffiliations: OWNER, privacy: PUBLIC) { totalCount }
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
      totalCommitContributions
      totalPullRequestContributions
      totalIssueContributions
      totalRepositoriesWithContributedCommits
    }
  }
}
`;

export default function GitHubProfileDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
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
          setData(result.data.user);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  // Removed daily contribution list; graph lives in separate component

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div className="github-profile">
        <div>
          <h2 className="github-username">
            <a href={`https://github.com/${data.login}`} target="_blank" rel="noreferrer">
              {data.login}
              <span className="external-link-icon" aria-hidden="true">↗</span>
            </a>
          </h2>
          <p className="github-bio">{data.bio}</p>
          <p>
            {data.company && `🏢 ${data.company}`} {" "}
            {data.location && `📍 ${data.location}`} {" "}
            {data.websiteUrl && (
              <a href={data.websiteUrl} target="_blank" rel="noreferrer">
                🔗 Website
              </a>
            )}
          </p>
          <p>
            Followers: {data.followers.totalCount} | Following: {data.following.totalCount}
          </p>
        </div>
      </div>

      <div className="github-separator" />

      <div className="github-stats-cards">
        <div className="github-card">
          <span className="github-card-title">Total Contributions (last year)</span>
          <span className="github-card-value">{data.contributionsCollection.contributionCalendar.totalContributions}</span>
        </div>
        <div className="github-card">
          <span className="github-card-title">Commits</span>
          <span className="github-card-value">{data.contributionsCollection.totalCommitContributions}</span>
        </div>
        <div className="github-card">
          <span className="github-card-title">Pull Requests</span>
          <span className="github-card-value">{data.contributionsCollection.totalPullRequestContributions}</span>
        </div>
        <div className="github-card">
          <span className="github-card-title">Issues</span>
          <span className="github-card-value">{data.contributionsCollection.totalIssueContributions}</span>
        </div>
        <div className="github-card">
          <span className="github-card-title">Repos Contributed To</span>
          <span className="github-card-value">{data.contributionsCollection.totalRepositoriesWithContributedCommits}</span>
        </div>
        <div className="github-card">
          <span className="github-card-title">Public Repos (owned, no forks)</span>
          <span className="github-card-value">{data.ownedPublicNonForkRepos.totalCount}</span>
        </div>
      </div>
    </div>
  );
}


