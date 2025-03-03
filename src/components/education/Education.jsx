import React from 'react';
import './Education.css';
import Image1 from '../../assets/computer-science.png'
import Image2 from '../../assets/grade-12.jpg'
import Image3 from '../../assets/10th-grade.png'

const data = [
    
    {
        id: 1,
        image: Image1,
        title: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
        description: "K L E F Deemed To Be University | 2023 - 2027 | Vijayawada, Andhra Pradesh, India | GPA: 9.51/10"
    },
    
    
    {
        id: 2,
        image: Image2,
        title: "Senior Secondary (Class 12) – Science Stream",
        description: "Sunabeda Public School | ISC | 2021 - 2023 | Sunabeda, Odisha, India | GPA: 8.50/10"
    },
    {
        id: 3,
        image: Image3,
        title: "Secondary (Class 10)",
        description: "Sunabeda Public School | ICSE | 2020 - 2021 | Sunabeda, Odisha, India | GPA: 9.35/10"
    },
];

const Education = () => {
    return (
        <section className="education container section" id="education">
            <h2 className="section__title">Education</h2>

            <div className="education__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="education__card" key={id}>
                            <img src={image} alt='' className='education__img' width="80" />

                            <h3 className="education__title">{title}</h3>
                            <p className="education__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Education