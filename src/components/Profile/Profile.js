import React, { useContext, useEffect } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import useValidForm from "../../utils/useValidForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { RegExEmail, RegExName } from "../../utils/constants/constants";

function Profile({ onLogOut, onUpdate }) {
    const currentUser = useContext(CurrentUserContext);
    const validation = useValidForm();

    let isFormValid = validation.isValid && ((validation.values.name !== currentUser.name) || (validation.values.email !== currentUser.email));

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onUpdate(validation.values); 
    };

    useEffect(() => {
        validation.setCurrentUserValues(currentUser);
    }, [currentUser]);

    return (
        <main className="main">
            <section className="profile">
                <h1 className="profile__title">Привет, {validation.values.name ?? currentUser.name}!</h1>
                <form className="profile__form" onSubmit={handleSubmit} name="profile">
                    <div className="profile__form-items">
                        <label className="profile__form-item">
                            <p className="profile__data">Имя</p>
                            <input className="profile__form-input" name="name" placeholder="Ваше имя" required minLength={2} maxLength={10}
                            value={validation.values.name ?? currentUser.name ?? ''}
                            onChange={(evt) => validation.handleChange(evt)} pattern={RegExName}/>
                        </label>
                        <label className="profile__form-item">
                            <p className="profile__data">E-mail</p>
                            <input className="profile__form-input" name="email" placeholder="Ваша почта" required minLength={2} maxLength={20}
                            value={validation.values.email ?? currentUser.email ?? ''}
                            onChange={(evt) => validation.handleChange(evt)}/>
                        </label>
                    </div>
                    <button className={`profile__submit-button ${!isFormValid ? 'profile__submit-button_disabled' : ''}`} disabled={!isFormValid ? true : false} type="submit">Редактировать</button>
                </form>
                <Link className="profile__exit-button" onClick={onLogOut}>Выйти из аккаунта</Link>
            </section>
        </main>
    )
}

export default Profile;