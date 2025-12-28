import React from "react";
import "./Achievements.css";
import Menu from "./Menu";
import { RiTrophyLine, RiMedalLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Achievements = () => {
  const getIcon = (type) => {
    if (type === "trophy") return <RiTrophyLine className="achievements__icon" />;
    return <RiMedalLine className="achievements__icon" />;
  };

  return (
    <section className="achievements container section" id="achievements">
      <h2 className="section__title">Achievements</h2>

      <div className="achievements__container">
        {Menu.map(({ id, title, description, badge, icon }) => (
          <motion.div
            key={id}
            className="achievements__card"
            whileHover={{ scale: 1.02 }}
          >
            <span className="achievements__badge">{badge}</span>

            {getIcon(icon)}

            <h3 className="achievements__title">{title}</h3>

            <p className="achievements__description">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
