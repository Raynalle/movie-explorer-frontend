import React, { useState } from "react";
import './MovieCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard({ card }) {
    const [favorite, setFavorite] = useState(false);

    function handleFavoriteToogle() {
        setFavorite(!favorite);
    }

    const { pathname } = useLocation();

    return (
        <li className="card">
            <img className="card__image" src={card.image} alt={card.title} />
            <div className="card__element">
                <p className="card__title">{card.title}</p>
                <div className="card__buttons">
                    {pathname === '/saved-movies' ? (
                        <button className="card__button card__button_delete" type="button"></button>
                    ) : (
                        <button className={`card__button card__button${favorite ? '_active' : '_no-active'}`} onClick={handleFavoriteToogle}></button>
                    )}
                </div>
            </div>
            <p className="card__duration">{card.duration}</p> 
        </li>
    )
}

export default MoviesCard;