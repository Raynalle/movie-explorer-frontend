import '../Movies/MoviesCardList/MoviesCardList.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import savedMovies from '../../utils/savedMovies';

function SavedMovies() {
    return (
        <>
          <SearchForm />
          <MoviesCardList cards={savedMovies} buttonMore={false} />
        </>
    )
}

export default SavedMovies;