import React from "react";
import "./GitHub.css";
import GitHubProfileDashboard from "./GitHubProfileDashboard";
import ContributionGraph from "./ContributionGraph";

const GitHub = () => {
  return (
    <section className="container section github-section" id="github">
      <h2 className="section__title">Developer Insights</h2>

      <div className="github-content">
        <GitHubProfileDashboard />
        <ContributionGraph />
      </div>
    </section>
  );
};

export default GitHub;


