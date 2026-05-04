import React from 'react';
import KLU from '../../assets/klulogo.webp'
import SPS from '../../assets/spslogo.webp'

import NextImage from 'next/image';
import { motion } from 'framer-motion';

const exactStyles = `
.education__container {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  max-width: 850px;
  margin: 0 auto;
}
.education__card {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  padding: 2rem;
  border-radius: 1.25rem;
  background-color: var(--container-color);
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}
.education__card:hover {
  transform: translateX(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.education__img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 0;
  border: 4px solid rgba(0, 0, 0, 0.05);
  padding: 5px;
  background: #fff;
}
.education__content {
  flex: 1;
}
.education__title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--title-color);
  font-weight: var(--font-bold);
}
.education__description {
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.6;
}
/* Accent Colors as Left Borders */
.education__card:nth-child(1) { border-left: 6px solid rgb(108, 108, 229); }
.education__card:nth-child(2) { border-left: 6px solid rgb(249, 215, 76); }
.education__card:nth-child(3) { border-left: 6px solid rgb(249, 123, 139); }
/* Dark Mode Overrides - Premium Aesthetics */
[data-theme="dark"] .education__card {
  background: linear-gradient(145deg, rgba(40, 40, 40, 0.9), rgba(30, 30, 30, 0.9));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
[data-theme="dark"] .education__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(108, 108, 229, 0.05), transparent 60%);
  pointer-events: none;
}
[data-theme="dark"] .education__card:hover {
  transform: translateX(12px) scale(1.01);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  background: linear-gradient(145deg, rgba(45, 45, 45, 0.95), rgba(35, 35, 35, 0.95));
  border-color: rgba(255, 255, 255, 0.15);
}
/* Glowing Accent Borders for Dark Mode */
[data-theme="dark"] .education__card:nth-child(1) { border-left: 6px solid rgb(108, 108, 229); box-shadow: -5px 0 20px rgba(108, 108, 229, 0.15), var(--shadow); }
[data-theme="dark"] .education__card:nth-child(2) { border-left: 6px solid rgb(249, 215, 76); box-shadow: -5px 0 20px rgba(249, 215, 76, 0.15), var(--shadow); }
[data-theme="dark"] .education__card:nth-child(3) { border-left: 6px solid rgb(249, 123, 139); box-shadow: -5px 0 20px rgba(249, 123, 139, 0.15), var(--shadow); }
[data-theme="dark"] .education__img {
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  padding: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
[data-theme="dark"] .education__title { color: #fff; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
[data-theme="dark"] .education__description { color: #a7aeb9; font-weight: 300; }
@media screen and (max-width: 576px) {
  .education__card { flex-direction: column; text-align: center; padding: 2rem 1.5rem; }
  .education__card:hover { transform: translateY(-5px); }
  .education__img { width: 80px; height: 80px; }
}
`;

const data = [
    {
        id: 1,
        image: KLU,
        title: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
        description: "K L E F Deemed To Be University | 2023 - 2027 | Vijayawada, Andhra Pradesh, India | GPA: 9.4/10"
    },
    {
        id: 2,
        image: SPS,
        title: "Senior Secondary (Class 12) – Science Stream",
        description: "Sunabeda Public School | ISC | 2021 - 2023 | Sunabeda, Odisha, India | Percentage: 85%"
    },
    {
        id: 3,
        image: SPS,
        title: "Secondary (Class 10)",
        description: "Sunabeda Public School | ICSE | 2020 - 2021 | Sunabeda, Odisha, India | Percentage: 93.5%"
    },
];

const Education = () => {
    return (
        <section className="education container section" id="education">
            <style dangerouslySetInnerHTML={{ __html: exactStyles }} />
            <h2 className="section__title">Education</h2>

            <div className="education__container grid">
                {data.map(({ id, image, title, description }, index) => {
                    return (
                        <motion.div
                            className="education__card"
                            key={id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <NextImage 
                                src={image} 
                                alt={title} 
                                className='education__img' 
                                sizes="110px"
                            />

                            <div className="education__content">
                                <h3 className="education__title">{title}</h3>
                                <p className="education__description">{description}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default Education;
