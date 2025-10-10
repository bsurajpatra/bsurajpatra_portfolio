import React from "react";
import "./GitHub.css";
import GitHubProfileDashboard from "./GitHubProfileDashboard";
import ContributionGraph from "./ContributionGraph";

const GitHub = () => {
  return (
    <section className="container section github-section" id="github">
      <div className="github-header">
        <h2 className="section__title">Developer Activity & Insights</h2>
      </div>
      <div className="github-content">
        <div className="github-platform-row">
          <span className="github-platform github-platform--lg">Platform: GitHub</span>
        </div>
        <GitHubProfileDashboard />
        <div className="github-separator" />
        <ContributionGraph />
      </div>
    </section>
  );
};

export default GitHub;


