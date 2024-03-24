import React, { useContext, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import MoreButton from "../MoreButton/MoreButton";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Movies = ({ loggedIn }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    async function fetchData() {
      const response = await moviesApi.getMovies();
      setMovies(response);
    }

    fetchData();
  }, []);
  
    return (
        <div className = "movies">
          <SearchForm />
          <MoviesCardList movies={movies}/>
          <Preloader /> 
          <MoreButton />
        </div>
    );
};

export default Movies;