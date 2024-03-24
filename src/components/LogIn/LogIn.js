import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import '../Forms/Forms.css';
import useValidForm from '../../utils/useValidForm';
import { RegExEmail } from '../../utils/constants/constants';

function LogIn({ onLogin }) {
    const validation = useValidForm();
    const navigate = useNavigate();

    // useEffect(() => {
    //     const jwt = localStorage.getItem('jwt');

    //     if (jwt) {
    //         navigate('/movies');
    //     }
    // },[]);
    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        onLogin(validation.values);
    };

    return (
        <main className='main'>
            <section className="form">
                <div className="form__wrapper">
                    <Link to="/" className="form__link">
                        <img className="form__logo" src={logo} alt="Логотип"/>
                    </Link>
                    <h1 className="form__title">Рады видеть!</h1>
                    <form className="form__inputs" onSubmit={handleSubmit} name='login'>
                        <div className="form__items">
                            <label className="form__item">
                                <p className="form__item-data">E-mail</p>
                                <input className={`form__input ${validation.errors.email ? 'form__input_error-color' : ''}`} name="email" type="email" placeholder="Введите вашу почту"
                                value={validation.values.email ?? ''}
                                onChange={(e) => validation.handleChange(e)} required pattern={RegExEmail}/>
                                <p className={`form__input-error ${validation.errors.email ? 'form__input-error-display' : ''}`}>{validation.errors.email}</p>
                            </label>
                            <label className="form__item">
                                <p className="form__item-data">Пароль</p>
                                <input className={`form__input ${validation.errors.password ? 'form__input_error-color' : ''}`} name="password"
                                type="password" placeholder="Введите пароль" required value={validation.values.password ?? ''}
                                onChange={(e) => validation.handleChange(e)}/>
                                <p className={`form__input-error ${validation.errors.password ? 'form__input-error-display' : ''}`}>{validation.errors.password}</p>
                            </label>
                        </div>
                        <button className={`form__button form__button_type-login ${validation.isValid ? "" : "form__button_disabled"}`} type="submit" disabled={!validation.isValid ? true : ""}>Войти</button>
                    </form>
                    <p className="form__subtitle form__subtitle_login">Ещё не зарегистрированы?
                    <Link to="/signup" className="form__link">Регистрация</Link>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default LogIn;