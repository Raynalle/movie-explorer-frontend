import React from 'react';
import './Header.css';
import accauntLogo from '../../images/accaunt-logo.svg';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { useLocation } from 'react-router-dom'


function Header({ loggedIn }) {
    const location = useLocation();
    //loggedIn = true; //для проверки авторизированной шапки на главной странице
    
    let classList = 'header';

    if (location.pathname !== '/') {
        classList += ' header_white';
    }

    let classListButton = 'header__nav-movie-button';

    if (location.pathname === '/') {
        classListButton += ' header__nav-movie-button_green';
    }

    let classListLinkColor = 'header__nav-movie-link';

    if (location.pathname === '/') {
        classListLinkColor += ' header__nav-movie-link_color-white';
    }

    return (
        <header className={classList}>
            {!loggedIn ? (
                <div className='header__nav-auth'>
                    <Link to={"/"} className='header__logo-auth'></Link>
                    <nav className='header__nav'>
                        <Link to={"/signup"} className='header__link-auth'>
                            Регистрация
                        </Link>
                        <Link to={"/signin"} className='header__button-auth'>Войти</Link>
                    </nav>
                </div>
            )
             : (
                <div className='header__nav-movie'>
                    <Link className='header__logo-auth' to={"/"}></Link>
                    <div className='header__container'>
                        <Link to={"/movies"} className={classListLinkColor}>Фильмы</Link>
                        <Link to={"/saved-movies"} className={classListLinkColor}>Сохранённые фильмы</Link>
                    </div>
                    <Link to={"/profile"} className={classListButton}>Аккаунт
                    <img className='0' src={accauntLogo} alt='Аккаунт'/></Link>
                    <BurgerMenu />
                </div>
            )}
        </header>
    );
}

export default Header;