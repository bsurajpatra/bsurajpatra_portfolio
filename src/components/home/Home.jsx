import React from 'react';
import './Home.css';
import Me from '../../assets/Profession.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <div className="left">
                    <img src={Me} alt="" className='home__img' width='120' />
                </div>
                <div className="right">
                <h1 className="home__name">B Suraj Patra</h1>
                    <span className="home__education">
                    Early-Career Software Engineer | Full Stack Developer <br/>
                    Passionate About Free and Open Source Innovation <br/>
                    Game & UX — Design and Development
                    </span>
                    <HeaderSocials />
                    <a href="#contact" className="btn"> Contact Me</a>
                </div>
            </div>

            <ScrollDown />

            <Shapes />
        </section>
    )
}

export default Home