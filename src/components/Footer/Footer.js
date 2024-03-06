import React from "react";
import './Footer.css';
import { useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();

    let classListFooter = "footer"
    if (location.pathname === "/movies") {
        classListFooter += " footer_movies";
    }

    if (location.pathname === "/saved-movies") {
        classListFooter += " footer_saved-movies";
    }
    return (
        <footer className={classListFooter}>
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__wrapper">
                <p className="footer__subtitle">© 2024</p>
                <nav className="footer__navigate">
                    <ul className="footer__navigate-list">
                        <li className="footer__navigate-item">
                            <a className="footer__navigate-link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                        </li>
                        <li className="footer__navigate-item">
                            <a className="footer__navigate-link" href="https://github.com/Raynalle" target="_blank" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;