import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <section className="not-found">
            <div className="not-found__wrapper">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__subtitile">Страница не найдена</p>
            </div>
            <Link to={-1} className="not-found__link">Назад</Link>
        </section>
    )
}

export default NotFound;