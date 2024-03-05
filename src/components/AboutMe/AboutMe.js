import React from "react";
import photo from "../../images/i-am.jpg";
import arrowLink from "../../images/url.svg";
import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__header-title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__wrapper">
                    <h3 className="about-me__name">Дмитрий</h3>
                    <p className="about-me__profession">Фронтенд-разработчик, 26 лет</p>
                    <p className="about-me__description">Я родился и живу в Москве, закончил колледж, отслужил в армии. 
                    Я люблю слушать музыку, а ещё увлекаюсь сборкой моделей. 
                    Недавно начал кодить. Процесс разработки меня захватывает и вдохновляет.</p>
                    <a className="about-me__git" href="https://github.com/Raynalle?tab=repositories" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="about-me__photo" src={photo} alt="Моё фото" />
            </div>
            <h4 className="about-me__portfolio">Портфолио</h4>
            <ul className="about-me__items">
                <li className="about-me__item">
                    <a className="about-me__url" href="https://github.com/Raynalle/how-to-learn" target="_blank" rel="noreferrer">
                        <p className="about-me__url-text">Статичный сайт</p>
                        <img className="about-me__arrow" src={arrowLink} alt="Ссылка"/>
                    </a>
                </li>
                <li className="about-me__item">
                    <a className="about-me__url" href="https://github.com/Raynalle/russian-travel" target="_blank" rel="noreferrer">
                        <p className="about-me__url-text">Адаптивный сайт</p>
                        <img className="about-me__arrow" src={arrowLink} alt="Ссылка"/>
                    </a>
                </li>
                <li className="about-me__item">
                    <a className="about-me__url" href="https://github.com/Raynalle/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
                        <p className="abot-me__url-text">Одностраничное приложение</p>
                        <img className="about-me__arrow" src={arrowLink} alt="Ссылка"/>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default AboutMe;