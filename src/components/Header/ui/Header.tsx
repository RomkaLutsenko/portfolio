import React, {useState} from 'react';
import cls from './Header.module.scss'

export const Header = () => {
    const [active, setActive] = useState(false)

    const burgerToggle = () => {
        setActive(prevState => !prevState)
    }

    return (
        <header className={cls.header}>
            <div className={cls.header__row}>
                <a className={cls.header__name} href="#block-home">Roman.dev</a>
                <nav className={cls.header__menu}>
                    <div onClick={burgerToggle} className={`${cls.menu__icon} ${active ? cls.menu__icon_active : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`${cls.menu__body} ${active ? cls.menu__body_active : ''}`}>
                        <ul className={cls.menu__list}>
                            <a href="#block-home"><li>Home</li></a>
                            <li><a href="#block-about">About</a></li>
                            <li><a href="#block-projects">Projects</a></li>
                            <li><a href="#block-contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};
