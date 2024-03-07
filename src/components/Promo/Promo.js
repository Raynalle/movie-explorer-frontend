import React from "react";
import promoLogo from "../../images/promo-logo.svg"
import './Promo.css';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__wrapper">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a className="promo__anchor-link" href="#about-project">Узнать больше</a>
            </div>
            <img className="promo__logo" src={promoLogo} alt="Лого"/>
        </section>
    );
};

export default Promo;