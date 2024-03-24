import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import '../Forms/Forms.css';
import useValidForm from "../../utils/useValidForm";
import { RegExEmail, RegExName } from '../../utils/constants/constants';

function Register({ onRegister }) {
    const validation = useValidForm();
    const navigate = useNavigate();

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            navigate('/movies');
        }
    }, []);

    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        onRegister(validation.values);
    };

    return(
        <main className="main">
            <section className="form">
                <div className="form__wrapper">
                    <Link to="/" className="form__link">
                        <img className="form__logo" src={logo} alt="Логотип"/>
                    </Link>
                    <h1 className="form__title">Добро пожаловать!</h1>
                    <form className="form__inputs" onSubmit={handleSubmit} name="register">
                        <div className="form__items">
                            <label className="form__item">
                                <p className="form__item-data">Имя</p>
                                <input className={`form__input ${validation.errors.name ? 'form__input_error-color' : ''}`} name="name" placeholder="Введите ваше имя" type="text" value={validation.values.name || ""} 
                                onChange={(e) => validation.handleChange(e)} required minLength={2} maxLength={10} pattern={RegExName}/>
                                <p className={`form__input-error ${validation.errors.name ? 'form__input-error-display' : ''}`}>{validation.errors.name}</p>
                            </label>
                            <label className="form__item">
                                <p className="form__item-data">E-mail</p>
                                <input className={`form__input ${validation.errors.email ? 'form__input_error-color' : ''}`} name="email" type="email" placeholder="Введите вашу почту"
                                value={validation.values.email || ""}
                                onChange={(e) => validation.handleChange(e)} required pattern={RegExEmail}/>
                                <p className={`form__input-error ${validation.errors.email ? 'form__input-error-display' : ''}`}>{validation.errors.email}</p>
                            </label>
                            <label className="form__item">
                                <p className="form__item-data">Пароль</p>
                                <input className={`form__input ${validation.errors.password ? 'form__input-error-display' : ''}`} name="password"
                                type="password" placeholder="Введите пароль" required minLength={8} 
                                value={validation.values.password || ""}
                                onChange={(e) => validation.handleChange(e)}/>
                                <p className={`form__input-error ${validation.errors.password ? 'form__input-error-display' : ''}`}>{validation.errors.password}</p>
                            </label>
                        </div>
                        <button className={`form__button ${validation.isValid ? "" : "form__button_disabled"}`} type="submit" disabled={!validation.isValid ? true : ''}>Зарегистрироваться</button>
                    </form>
                    <p className="form__subtitle">Уже зарегистрированы?
                    <Link to="/signin" className="form__link">Войти</Link>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Register;