import React from 'react';
import cls from './About.module.scss'
import about_image from '../../../assets/about_image.jpg'

export const About = () => {
    return (
        <div id="block-about" className="container">
            <div className={cls.about}>
                <div className={cls.about__image}>
                    <img src={about_image} alt=""/>
                </div>
                <div className={cls.about__content}>
                    <div className={cls.content__link}>ABOUT ME</div>
                    <div className={cls.content__title}>
                        A dedicated Front-end Developer <br/>
                        based in Krasnoyarsk, Russia
                    </div>
                    <div className={cls.content__text}>
                        As a junior Front-end Developer, I possess an not bad
                        arsenal of skills in HTML, CSS, SCSS, JavaScript, React, Redux
                        and Webpack. I studying in maintaining responsive websites
                        that offer a smooth user experience. My expertise lies in
                        crafting dynamic, attractive  interfaces through writing
                        clean and optimized code and utilizing cutting-edge
                        development tools and techniques. I am also a team player,
                        but my experience is limited only to computer games and sports
                        disciplines such as basketball and volleyball,
                        but I also want to succeed in collaborating with cross-functional
                        teams to create outstanding web applications.
                    </div>
                </div>
            </div>
        </div>
    );
};
