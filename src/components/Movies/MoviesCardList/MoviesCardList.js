import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MovieCard/MovieCard";

function MoviesCardList({movies}) {
    return (
        <main className="main">
            <section className="cards">
                <ul className="cards__list">
                    {movies && movies.map((movie, _id) => (
                        <MoviesCard key = {_id} card = {movie} />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default MoviesCardList;