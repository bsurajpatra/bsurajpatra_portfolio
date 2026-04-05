import React from "react";
import "./GitHub.css";
import GitHubProfileDashboard from "./GitHubProfileDashboard";
import ContributionGraph from "./ContributionGraph";

import { motion } from "framer-motion";

const GitHub = () => {
  return (
    <section className="container section github-section" id="github">
      <h2 className="section__title">Developer Insights</h2>

      <motion.div
        className="github-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <GitHubProfileDashboard />
        <ContributionGraph />
      </motion.div>
    </section>
  );
};

export default GitHub;


