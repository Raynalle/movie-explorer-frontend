import React from "react";
import "./MoviesCardList.css";
import MovieesCard from "../MovieCard/MovieCard";

function MoviesCardList({ cards}) {

    return (
        <main className="main">
            <section className="cards">
                <ul className="cards__list">
                    {cards && cards.map((card) => (
                        <MovieesCard key = {card.id} card = {card} />
                    ))}
                </ul>

            </section>
        </main>
    )
}

export default MoviesCardList;