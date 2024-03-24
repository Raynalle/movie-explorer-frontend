import React, { useState } from "react";
import './Navigation.css';
import { Link, NavLink } from "react-router-dom";

function Navigation({loggedIn}) {
    const [isClicked, setIsClicked] = useState(false);

    function handleNavOpen() {
        setIsClicked(true);
    };

    function handleNavClose() {
        setIsClicked(false);
    };

    return (
        <nav className={`navigation ${isClicked ? 'navigation_open' : ''}`}>
          {loggedIn ? (
            <>
              <button
                className={`navigation__button ${isClicked ? 'navigation__button_close' : 'navigation__button_sidebar'}`}
                onClick={isClicked ? handleNavClose : handleNavOpen}
              />
    
              <div className={`navigation__box ${isClicked ? 'navigation__box_open' : ''}`}>
                <NavLink exact to='/' activeClassName='navigation__film-link_active' className='navigation__film-link app__link'
                onClick={handleNavClose}>
                  Главная
                </NavLink>
                <NavLink to='/movies' activeClassName='navigation__film-link_active' className='navigation__film-link app__link'
                onClick={handleNavClose}>
                  Фильмы
                </NavLink>
                <NavLink to='/saved-movies' activeClassName='navigation__film-link_active' className='navigation__film-link app__link'
                onClick={handleNavClose}>
                  Сохраненные фильмы
                </NavLink>
                <Link to='/profile' className='navigation__link navigation__link_profile app__link'
                onClick={handleNavClose}>
                  Аккаунт
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link to='/signup' className='navigation__link app__link'>Регистрация</Link>
              <Link to='/signin' className='navigation__link navigation__link_signin app__link'>Войти</Link>
            </>
          )}
        </nav>
      );
};

export default Navigation;