import React from 'react';
import LinkedInLogo from '../../assets/LinkedInLogo.png';
import XLogo from '../../assets/XLogo.png';
import GitHubLogo from '../../assets/GithubLogo.png';
import InstagramLogo from '../../assets/InstagramLogo.png';
import TelegramLogo from '../../assets/telegram.png';
const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/bsurajpatra' className='home__social-link' target='_blank' rel='noreferrer'>
                <img src={GitHubLogo} alt="GitHub Logo" className="social-logo" />
            </a>

            <a href='https://www.linkedin.com/in/b-suraj-patra/' className='home__social-link' target='_blank' rel='noreferrer'>
                <img src={LinkedInLogo} alt="LinkedIn Logo" className="social-logo" />
            </a>

            <a href='https://x.com/bsurajpatra?t=LxiiiVr8RwoIUJHTbajsBg&s=09' className='home__social-link' target='_blank' rel='noreferrer'>
                <img src={XLogo} alt="X Logo" className="social-logo" />
            </a>

            <a href='https://www.instagram.com/suraj_patra_0/' className='home__social-link' target='_blank' rel='noreferrer'>
                <img src={InstagramLogo} alt="Instagram Logo" className="social-logo" />
            </a>

            <a href='https://t.me/bsurajpatra' className='home__social-link' target='_blank' rel='noreferrer'>
                <img src={TelegramLogo} alt="Telegram Logo" className="social-logo" />
            </a>
        </div>
    );
};

export default HeaderSocials;
