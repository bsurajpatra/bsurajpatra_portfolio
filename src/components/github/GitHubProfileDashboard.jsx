import React from "react";

export default function GitHubProfileDashboard() {
  return (
    <div className="github-stats-container">
      <div className="github-stats-grid">
        <div className="github-stats-card">
          <img 
            src="https://github-readme-streak-stats-eight.vercel.app/?user=bsurajpatra" 
            alt="GitHub Streak" 
            className="github-stats-image"
          />
        </div>
      </div>
    </div>
  );
}


