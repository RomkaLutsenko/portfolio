import React from 'react';
import cls from './MainPage.module.scss'
import {Home} from "../../components/Home";
import {About} from "../../components/About";
import {Projects} from "../../components/Projects";
import {Contact} from "../../components/Contact";

export const MainPage = () => {
    return (
        <div className={cls.main}>
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};
