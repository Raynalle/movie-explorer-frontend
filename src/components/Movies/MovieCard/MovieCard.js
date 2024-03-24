import React, { useState } from "react";
import './MovieCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard({ card, onCardLike, onCardDelete }) {
    //const [favorite, setFavorite] = useState(false);

    //function handleFavoriteToogle() {
        //setFavorite(!favorite);
    //}

    const { pathname } = useLocation();

    return (
        <li className="card">
            <a className="card__link" href={card.trailerLink}><img className="card__image" src={pathname === "/movies" ? `https://api.nomoreparties.co/${card.image.url}` :
            card.image}
             alt={card.nameRU}/></a>
            <div className="card__element">
                <p className="card__title">{card.nameRU}</p>
                <div className="card__buttons">
                    {pathname === '/saved-movies' ? (
                        <button className="card__button card__button_delete" type="button"></button>
                    ) : (
                        <button className={`card__button card__button${onCardLike ? '_active' : '_no-active'}`}></button>
                    )}
                </div>
            </div>
            <p className="card__duration">{`${Math.floor(card.duration / 60)}ч ${card.duration % 60}м`}</p> 
        </li>
    )
}

export default MoviesCard;