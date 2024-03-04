import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import isEmail from "validator/es/lib/isEmail";
import '../Forms/Forms.css';

function Register() {
    const [inputValues, setInputValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleInputCheck = (evt) => {
        const target = evt.target;
        const name = target.name;
        const value = target.value;

        if (name === 'email') {
            if (!isEmail(value)) {
                target.setCustomValidity('Неверный адрес почты');
            } else {
                target.setCustomValidity('');
            }
        }

        setInputValues({...inputValues, [name]: value});
        setErrors({...errors, [name]: target.validationMessage});
        setIsValid(target.closest('form').checkValidity());
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // send api data 
    };

    return(
        <section className="form">
            <div className="form__wrapper">
                <Link to="/" className="form__link">
                    <img className="form__logo" src={logo} alt="Логотип"/>
                </Link>
                <h2 className="form__title">Добро пожаловать!</h2>
                <form className="form__inputs" onSubmit={handleSubmit}>
                    <div className="form__items">
                        <label className="form__item">
                            <p className="form__item-data">Имя</p>
                            <input className="form__input" name="name" placeholder="Введите ваше имя" value={inputValues.name || ''} onChange={handleInputCheck} required minLength={2} maxLength={10}/>
                            <p className="form__input-error">Что-то пошло не так...</p>
                        </label>
                        <label className="form__item">
                            <p className="form__item-data">E-mail</p>
                            <input className={`form__input ${errors.email ? 'form__input_error-color' : ''}`} name="email" type="email" placeholder="Введите вашу почту"
                            value={inputValues.email || ''}
                            onChange={handleInputCheck} required/>
                            <p className={`form__input-error ${errors.email ? 'form__input-error-display' : ''}`}>{errors.email}</p>
                        </label>
                        <label className="form__item">
                            <p className="form__item-data">Пароль</p>
                            <input className={`form__input ${errors.password ? 'form__input-error-display' : ''}`} name="password"
                            type="password" placeholder="Введите пароль" required minLength={8} value={inputValues.password || ''}
                            onChange={handleInputCheck}/>
                            <p className={`form__input-error ${errors.password ? 'form__input-error-display' : ''}`}>{errors.password}</p>
                        </label>
                    </div>
                    <button className={`form__button ${isValid ? "" : "form__button_disabled"}`} type="submit" disabled={!isValid ? true : ''}>Зарегистрироваться</button>
                </form>
                <p className="form__subtitle">Уже зарегистрированы?
                  <Link to="/signin" className="form__link">Войти</Link>
                </p>
            </div>
        </section>
    )
}

export default Register;