import React from 'react';
import cls from './Projects.module.scss'
import diplom from '../../../assets/diplom.jpg'
import borsch from '../../../assets/borsch.jpg'
import blog from '../../../assets/blog.jpg'

export const Projects = () => {
    return (
        <div id="block-projects" className="container">
            <div className={cls.projects}>
                <div className={cls.projects__title}>PORTFOLIO</div>
                <div className={cls.projects__subtitle}>Each project is a unique piece of development</div>
                <div className={cls.projects__content}>
                    <div className={cls.content__cart}>
                        <div className={cls.content__image}>
                            <img src={diplom} alt="project photo"/>
                        </div>
                        <div className={cls.content__body}>
                            <div className={cls.content__title}>Дипломный проект</div>
                            <div className={cls.content__text}>
                                Этот проект не мешало бы отрефакторить,
                                но у меня просто напросто не хватает времени.
                                Хотя.. возможно он уже отрефакторен)
                                Проект хорошо отражает мои возможности и общие
                                понимания разработки на "голом" JavaScript.
                                Также он показывает актуальность и удобность
                                js фреймворков и стейт менеджеров.
                                После паузы, было очень сложно ориентироваться в
                                стилях и js логике. Это это стало отличным опытом для меня.
                                Ещё в проекте задействована БД , сильно не разбираюсь в бэке,
                                но считаю, что хорошее понятие, что происходит - есть
                            </div>
                            <div className={cls.content__stack}>Js | Css | Express | Parcel | mongoDB</div>
                            <div className={cls.content__links}>
                                <a href="https://github.com/RomkaLutsenko/web-diagnostic-app" target="_blank">GIT</a>
                            </div>
                        </div>
                    </div>
                    <div className={cls.content__cart_rev}>
                        <div className={cls.content__image}>
                            <img src={borsch} alt="project photo"/>
                        </div>
                        <div className={cls.content__body}>
                            <div className={cls.content__title}>React Borsch</div>
                            <div className={cls.content__text}>
                                Просто проект для портфолио. Отражение моих навыков
                                в чем-то материальном(без TS).
                                В проекте много взаимодействия с redux slice.
                                Компоненты, страницы, стили, в общем - стандарт.
                            </div>
                            <div className={cls.content__stack}>React/Redux | Scss | MockAPI | Webpack</div>
                            <div className={cls.content__links}>
                                <a href="https://github.com/RomkaLutsenko/react-borsch" target="_blank">GIT</a>
                            </div>
                        </div>
                    </div>
                    <div className={cls.content__cart}>
                        <div className={cls.content__image}>
                            <img src={blog} alt="project photo"/>
                        </div>
                        <div className={cls.content__body}>
                            <div className={cls.content__title}>Блог</div>
                            <div className={cls.content__text}>
                                Мой грааль знаний и дорога к middle уровню. Тут основной упор на внутрянку.
                                Классно всё, от локальных API компонентов до общей
                                архитектуры по методологии FSD. Модульный подход к
                                конфигурации Webpack. Модульный SCSS. TS. LazyLoading. Темы.
                                Переводы. eslint. Тесты. Чуть-чуть storybook. По мере изучения Front-end'а будет активно
                                совершенствоваться. Всё настроено и без ошибок.
                            </div>
                            <div className={cls.content__stack}>React/Redux | TS | Webpack!</div>
                            <div className={cls.content__links}>
                                <a href="https://github.com/RomkaLutsenko/blog" target="_blank">GIT</a>
                            </div>
                        </div>
                    </div>
                    <div className={cls.content__cart_rev}>
                        <div className={cls.content__image}>
                            <img src={borsch} alt="project photo"/>
                        </div>
                        <div className={cls.content__body}>
                            <div className={cls.content__title}>Сервис создания постов в блоге</div>
                            <div className={cls.content__text}>
                                Кастомные хуки. Получение постов посредством API. Создание. Удаление.
                                Поиск. Фильтрация. Красота и порядок в архитектуре.
                            </div>
                            <div className={cls.content__stack}>React Сss</div>
                            <div className={cls.content__links}>
                                <a href="https://github.com/RomkaLutsenko/blog-post_service" target="_blank">GIT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
