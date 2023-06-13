import React, { useRef } from 'react';
import style from './About.module.scss';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import useIsMobile from '../../hooks/useIsMobile';
import clients from '../../utils/clients';

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.containerLeft}>
        <div className={style.title}>Hi! I am Cracklez :)</div>
        <div className={style.description}>
          I am a freelance illustrator and graphic designer based in Bucharest,
          Romania. Most of my work is inspired by robots, old animes, skate-punk
          culture, music, cartoons, toys and video games. When I am not
          drawing(very rare), I like to go outside and skate, watch movies or
          play video games with my friends.
        </div>
        <div className={style.socialContainer}>
          <div className={style.socialTitle}>Social</div>
          <div className={style.socialPlatforms}>
            <div>
              <a href="">Instagram</a>
            </div>
            <div>
              <a href="">Behance</a>
            </div>
            <div>
              <a href="">Twitter</a>
            </div>
          </div>
        </div>
      </div>
      <img src="../images/cracklez.png" alt="cracklez" />
      <div className={style.copy}>© 2023 Cracklez Studio</div>
    </div>
  );
};

export default About;
