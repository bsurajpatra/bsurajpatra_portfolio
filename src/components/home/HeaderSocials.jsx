import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/bsurajpatra' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>


            <a href='https://www.linkedin.com/in/b-suraj-patra/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/profile.php?id=100009608130109' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://www.instagram.com/0_oopsididitagain_0?igsh=MWc4aWExaDJxdzV5ZA==' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram />
            </a>

            <a href='https://t.me/bsurajpatra' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaTelegramPlane/>
            </a>
            <a href='https://x.com/bsurajpatra?t=LxiiiVr8RwoIUJHTbajsBg&s=09' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaTwitter/>
            </a>
        </div>
    );
};

export default HeaderSocials;
