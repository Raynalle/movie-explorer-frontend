import '../Movies/MoviesCardList/MoviesCardList.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
//import CurrentUserContext from '../../contexts/CurrentUserContext';
//import React, {useContext, useState} from 'react';

function SavedMovies({loggedIn}) {
  //const currentUser = useContext();

  //const [savedCards, setSavedCards] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
    return (
        <>
          <SearchForm />
          <MoviesCardList buttonMore={false} />
        </>
    )
}

export default SavedMovies;