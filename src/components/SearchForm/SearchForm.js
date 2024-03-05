import React from "react";
import "./SearchForm.css";

function SearchForm() {
    return (
        <section className="search">
            <form className="search-form" >
                <div className="search-form__wrapper">
                    <input className="search-form__input" type="text" placeholder="Фильм" required />
                    <button className="search-form__button" type="submit" aria-label="Найти">Найти</button>
                </div>
                <div className="search__container">
                    <input className="search__switch" type="checkbox" />
                    <p className="search__text">Короткометражки</p>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;