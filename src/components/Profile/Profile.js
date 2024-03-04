import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
    const name = 'Виталий';
    const email = 'pochta@yandex.ru';

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // send api data 
    };
    return (
        <section className="profile">
            <h2 className="profile__title">Привет, {name}!</h2>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__form-items">
                    <label className="profile__form-item">
                        <p className="profile__data">Имя</p>
                        <input className="profile__form-input" name="name" placeholder="Ваше имя" required minLength={2} maxLength={10} defaultValue={name}/>
                    </label>
                    <label className="profile__form-item">
                        <p className="profile__data">E-mail</p>
                        <input className="profile__form-input" name="email" placeholder="Ваша почта" required minLength={2} maxLength={10} defaultValue={email}/>
                    </label>
                </div>
                <button className="profile__submit-button" type="submit">Редактировать</button>
            </form>
            <Link className="profile__exit-button" to={'/'}>Выйти из аккаунта</Link>
        </section>
    )
}

export default Profile;