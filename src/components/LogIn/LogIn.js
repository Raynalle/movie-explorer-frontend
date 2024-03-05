import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import isEmail from "validator/es/lib/isEmail";
import '../Forms/Forms.css';
import { useNavigate } from "react-router-dom";

function LogIn() {
    const [inputValues, setInputValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    let navigate = useNavigate();

    const handleInputCheck = (evt) => {
        const target = evt.target;
        const name = target.name;
        const value = target.value;

        if(name === 'email') {
            if(!isEmail(value)) {
                target.setCustomValidity('Неверный адрес почты');
            } else {
                target.setCustomValidity('');
            }
        }

        setInputValues({...inputValues, [name]:value});
        setErrors({...errors, [name]:target.validationMessage});
        setIsValid(target.closest('form').checkValidity());
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        // send api data to login
        navigate('/profile');
    };

    return (
        <main className='main'>
            <section className="form">
                <div className="form__wrapper">
                    <Link to="/" className="form__link">
                        <img className="form__logo" src={logo} alt="Логотип"/>
                    </Link>
                    <h1 className="form__title">Рады видеть!</h1>
                    <form className="form__inputs" onSubmit={handleSubmit}>
                        <div className="form__items">
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
                                type="password" placeholder="Введите пароль" required value={inputValues.password || ''}
                                onChange={handleInputCheck}/>
                                <p className={`form__input-error ${errors.password ? 'form__input-error-display' : ''}`}>{errors.password}</p>
                            </label>
                        </div>
                        <button className={`form__button form__button_type-login ${isValid ? "" : "form__button_disabled"}`} type="submit" disabled={!isValid ? true : ''}>Войти</button>
                    </form>
                    <p className="form__subtitle">Ещё не зарегистрированы?
                    <Link to="/signup" className="form__link">Регистрация</Link>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default LogIn;