import React, { useEffect, useState } from "react";
import {
  RiGithubFill,
  RiUserFollowLine,
  RiBookmarkLine,
  RiStarLine,
  RiGitRepositoryLine,
  RiExternalLinkLine,
  RiCodeSSlashLine
} from "react-icons/ri";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTypescript
} from "react-icons/si";

const LANGUAGE_ICONS = {
  JavaScript: <SiJavascript />,
  Python: <SiPython />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  TypeScript: <SiTypescript />,
};

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const USERNAME = "bsurajpatra";

const GITHUB_QUERY = `
query($userName: String!) {
  user(login: $userName) {
    name
    login
    avatarUrl
    bio
    followers {
      totalCount
    }
    following {
      totalCount
    }
    contributionsCollection {
      contributionCalendar {
        totalContributions
      }
      totalCommitContributions
    }
    repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: UPDATED_AT, direction: DESC}) {
      totalCount
      nodes {
        stargazerCount
        languages(first: 10) {
          edges {
            size
            node {
              name
              color
            }
          }
        }
      }
    }
    starredRepositories {
      totalCount
    }
  }
}
`;

export default function GitHubProfileDashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
          body: JSON.stringify({
            query: GITHUB_QUERY,
            variables: { userName: USERNAME },
          }),
        });

        const result = await response.json();

        if (result.errors) {
          setError(result.errors[0].message);
        } else {
          const user = result.data.user;
          const totalStars = user.repositories.nodes.reduce(
            (acc, repo) => acc + repo.stargazerCount,
            0
          );

          // Process languages
          const languageMap = {};
          user.repositories.nodes.forEach(repo => {
            repo.languages.edges.forEach(edge => {
              const lang = edge.node.name;
              const size = edge.size;
              const color = edge.node.color;
              if (languageMap[lang]) {
                languageMap[lang].size += size;
              } else {
                languageMap[lang] = { size, color };
              }
            });
          });

          const popularLanguages = Object.entries(languageMap)
            .map(([name, data]) => ({ name, ...data }))
            .sort((a, b) => b.size - a.size)
            .slice(0, 5);

          setUserData({
            ...user,
            totalStars,
            popularLanguages
          });
        }
      } catch (err) {
        setError("Failed to fetch GitHub data");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) return <div className="github-loading">Updating insights...</div>;
  if (error) return <div className="github-error">Oops! Couldn't load GitHub stats.</div>;

  const stats = [
    {
      label: "Repositories",
      value: userData.repositories.totalCount,
      icon: <RiGitRepositoryLine />,
      color: "#6e5494"
    },
    {
      label: "Stars Earned",
      value: userData.totalStars,
      icon: <RiStarLine />,
      color: "#f1c40f"
    },
    {
      label: "Total Contributions",
      value: userData.contributionsCollection.contributionCalendar.totalContributions,
      icon: <RiBookmarkLine />,
      color: "#e67e22"
    },
    {
      label: "Commits Made",
      value: userData.contributionsCollection.totalCommitContributions,
      icon: <RiGitRepositoryLine />,
      color: "#3498db"
    },
    {
      label: "Followers",
      value: userData.followers.totalCount,
      icon: <RiUserFollowLine />,
      color: "#2ecc71"
    }
  ];

  return (
    <div className="github-dashboard">
      <div className="github-profile-card">
        <div className="github-profile-header">
          <img src={userData.avatarUrl} alt={userData.name} className="github-avatar" />
          <div className="github-profile-info">
            <h3 className="github-name">
              {userData.name}
              <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer">
                <RiGithubFill />
              </a>
            </h3>
            <p className="github-bio">{userData.bio}</p>
            <div className="github-badges">
              <span className="github-badge">
                <RiBookmarkLine /> Open Source Contributor
              </span>
            </div>
          </div>
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="github-view-btn"
          >
            View Profile <RiExternalLinkLine />
          </a>
        </div>

        <div className="github-stats-grid-v2">
          {stats.map((stat, index) => (
            <div key={index} className="github-stat-card-v2" style={{ '--stat-color': stat.color }}>
              <span className="github-stat-icon">{stat.icon}</span>
              <div className="github-stat-details">
                <span className="github-stat-value">{stat.value}</span>
                <span className="github-stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="github-languages">
          <h4 className="languages-title">
            <RiCodeSSlashLine /> Popular Languages
          </h4>
          <div className="github-stats-grid-v2">
            {userData.popularLanguages.map((lang, index) => (
              <div key={index} className="github-stat-card-v2" style={{ '--stat-color': lang.color || 'var(--first-color)' }}>
                <span className="github-stat-icon">
                  {LANGUAGE_ICONS[lang.name] || <RiCodeSSlashLine />}
                </span>
                <div className="github-stat-details">
                  <span className="github-stat-value">{lang.name}</span>
                  <span className="github-stat-label">Main Language</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
