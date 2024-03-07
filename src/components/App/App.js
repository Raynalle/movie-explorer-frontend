import React from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../LogIn/LogIn';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';


function App() {
  return (
      <div className="App">
        <Routes>
          <>
          <Route path='/'
          element = {
            <>
              <Header loggedIn={false} />
              <Main />
              <Footer />
            </>
          }
          />

          <Route path='*' element = {<NotFound />} />

          <Route path='/movies'
          element = {
            <>
              <Header loggedIn={true} />
              <Movies />
              <Footer />
            </>
          }
          />

          <Route path='/saved-movies'
          element = {
            <>
              <Header loggedIn={true} />
              <SavedMovies />
              <Footer />
            </>
          } />

          <Route path='/profile'
          element = {
            <>
              <Header loggedIn={true} />
              <Profile />
            </>
          }
          /> 

          <Route path='signup' element = {<Register />} />

          <Route path='signin' element = {<Login />} />
          </>
        </Routes>
      </div>
  );
}

export default App;
