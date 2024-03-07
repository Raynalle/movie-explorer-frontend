import React from "react";
import './BurgerMenu.css';
import "../Header.css";

import { Link } from "react-router-dom";
import accauntLogo from "../../../images/accaunt-logo.svg";

function BurgerMenu({isOpen, setIsBurgerOpen}) {
    const [isBurgerMenuOpenButton, setIsBurgerMenuOpenButton] = React.useState("burger-menu__button");
    const [isBurgerMenuOpenNav, setIsBurgerMenuOpenNav] = React.useState("burger-menu__navigation");
    const [isBurgerMenuCloseActive, setIsBurgerMenuCloseActive] = React.useState("burger-menu__close-button");

    function handleButtonClick() {
        if (isBurgerMenuOpenButton.includes('active')) {
            setIsBurgerMenuOpenButton("burger-menu__button");
            setIsBurgerMenuOpenNav("burger-menu__navigation");
            setIsBurgerMenuCloseActive("burger-menu__close-button");
        } else {
            setIsBurgerMenuOpenButton("burger-menu__button active");
            setIsBurgerMenuOpenNav("burger-menu__navigation active");
            setIsBurgerMenuCloseActive("burger-menu__close-button active");
        }
    };

    return (
        <section className="burger-menu">
            <button onClick={handleButtonClick} className={isBurgerMenuOpenButton}></button>
            <button onClick={handleButtonClick} className= {isBurgerMenuCloseActive}></button>
            <nav className={isBurgerMenuOpenNav}>
                <ul className="burger-menu__links">
                    <Link to={"/"}
                    className="burger-menu__link">Главная</Link>
                    <Link to={"/movies"}
                    className="burger-menu__link">Фильмы</Link>
                    <Link to={"/saved-movies"}
                    className="burger-menu__link">Сохранённые фильмы</Link>
                    <div className="burger-menu__container">
                        <Link to={"/profile"}
                        className="header__nav-movie-button header__nav-movie-button_burger">Аккаунт</Link>
                        <Link to={"/profile"} className="burger-menu__link"><img className="header__nav-movie-img" src={accauntLogo} alt="аккаунт" /></Link>
                    </div>
                </ul>
            </nav>
        </section>
    )
}

export default BurgerMenu;