import React from "react";

export default function GitHubProfileDashboard() {
  return (
    <div className="github-stats-container">
      <div className="github-stats-grid">
        <div className="github-stats-card">
          <img 
            src="https://github-readme-stats.vercel.app/api?username=bsurajpatra&show_icons=true&theme=tokyonight&cache_seconds=86400" 
            alt="GitHub Stats" 
            className="github-stats-image"
          />
        </div>
        <div className="github-stats-card">
          <img 
            src="https://streak-stats.demolab.com?user=bsurajpatra&theme=tokyonight" 
            alt="GitHub Streak" 
            className="github-stats-image"
          />
        </div>
      </div>
    </div>
  );
}


