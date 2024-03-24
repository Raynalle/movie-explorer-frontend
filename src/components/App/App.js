import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import Register from '../Register/Register';
import Login from '../LogIn/LogIn';
import Profile from '../Profile/Profile';

import NotFound from '../NotFound/NotFound';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useLocation } from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');
  const [updateError, setUpdateError] = useState('');

  const location = useLocation();

  const auth = (jwt) => {
    return mainApi.authUser(jwt).then((res) => {
      if (res) {
        setLoggedIn(true);
        setCurrentUser(res);
      }
    })
    .catch((err) => {
      console.log(`Ошибка при получении данных пользователя. ${err}`);
    })
  }

  const onLogin = ({ email, password }) => {
    return mainApi.authorize(email, password).then((res) => {
      if (res.token) {
        localStorage.setItem('jwt', res.token);
        auth(res.token);
        navigate('/movies');
      }
    })
    .catch((err) => {
      console.log(`Не удалось авторизировать пользователя. ${err}`);
      setLoginError(`Не удалось авторизироваться. ${err}`);
    });
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if(jwt) {
      auth(jwt);
    } else {
      const protectedRoutes = ['movies', 'saved-movies', 'profile'];

      if (protectedRoutes.includes(location.pathname)) {
        navigate('/');
      } else {
        navigate(location.pathname);
      }
    }
  }, []);

  const onLogOut = (event) => {
    event.preventDefault();
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser([]);
    navigate('/');
  }

  const onRegister = ({name, email, password}) => {
    return mainApi.register(name, email, password).then((res) => {
      onLogin({email, password})
      return res;
    })
    .catch((err) => {
      console.log(`Не удалось зарегистрировать пользователя. ${err}`);
      setRegisterError(`Не удалось зарегистрироваться. ${err}`);
    });
  }

  const onUpdate = ({name, email}) => {
    return mainApi.updateUser(name, email).then((res) => {
      setCurrentUser(res);
      setUpdateMessage('Данные успешно обновлены');
      setTimeout(() => {
        setUpdateMessage('');
      }, 1000);
    })
    .catch((err) => {
      console.log(`Не удалось обновить данные пользователя. ${err}`);
      setUpdateMessage(`Не удалось обновить данные. ${err}`);
      setTimeout(() => {
        setUpdateError('');
      }, 2000)
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <>
          <Route path='/'
          element = {
            <>
              <Header loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          }
          />

          <Route path='/movies'
          element = {
            <>
              <Header loggedIn={loggedIn} />
              <ProtectedRoute>
                <Movies loggedIn={loggedIn}/>
              </ProtectedRoute>
              <Footer />
            </>
          }
          />

          <Route path='/saved-movies'
          element = {
            <>
              <Header loggedIn={loggedIn} />
              <ProtectedRoute> 
                <SavedMovies loggedIn={loggedIn}/>
              </ProtectedRoute>
              <Footer />
            </>
          } />

          <Route path='/profile'
          element = {
            <>
              <Header loggedIn={loggedIn} />
              <ProtectedRoute>
                <Profile onLogOut = {onLogOut} onUpdate={onUpdate} updateMessage = {updateMessage} updateError = {updateError} setLoggedIn = {setLoggedIn}/>
              </ProtectedRoute>
            </>
          }
          /> 

          <Route path='signup' element = {<Register onRegister={onRegister} signError={registerError} updateMessage = {updateMessage} updateError = {updateError}/>} />

          <Route path='signin' element = {<Login onLogin={onLogin} signError = {loginError} updateMessage = {updateMessage} updateError = {updateError}/>} />
          
          <Route path='*' element = {<NotFound />} />
          </>
        </Routes>
      </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
