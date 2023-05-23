import React from 'react';
import cls from './Home.module.scss'
import photo2 from '../../../assets/photo_2.jpg'
import Inst from  '../../../assets/insta.svg'
import Git from  '../../../assets/git.svg'
import HTML from  '../../../assets/html.svg'
import CSS from  '../../../assets/css.svg'
import SCSS from  '../../../assets/scss.svg'
import JS from  '../../../assets/js.svg'
import REACT from  '../../../assets/react.svg'
import REDUX from  '../../../assets/redux.svg'
import WEBPACK from  '../../../assets/webpack.svg'


export const Home = () => {
    return (
        <div id="block-home" className="container">
            <div className={cls.home}>
                <div className={cls.home__body}>
                    <div className={cls.body__text}>
                        <div className={cls.body__title}>Front-end React Developer</div>
                        <div className={cls.body__subtitle}>
                            Hi, I'm Roman Lutsenko. A passionate Front-end React Developer <br/>
                            based in Krasnoyarsk, Russia.
                        </div>
                        <div className={cls.body__links}>
                            <a href="https://www.instagram.com/romaan.lutsenko" target="_blank"><Inst className={cls.body__link} /></a>
                            <a href="https://github.com/RomkaLutsenko" target="_blank"><Git className={cls.body__link} /></a>
                        </div>
                    </div>
                    <div className={cls.body__image}>
                        <img src={photo2} alt=""/>
                    </div>
                </div>
                <div className={cls.home__stack}>
                    <div className={cls.stack__title}>Tech stack</div>
                    <span> | </span>
                    <div className={cls.stack__list}>
                        <HTML className={cls.stack__list_item} />
                        <CSS className={cls.stack__list_item}/>
                        <SCSS className={cls.stack__list_item}/>
                        <JS className={cls.stack__list_item}/>
                        <REACT className={cls.stack__list_item}/>
                        <REDUX className={cls.stack__list_item}/>
                        <WEBPACK className={cls.stack__list_item}/>
                    </div>
                </div>
            </div>
        </div>

    );
};
