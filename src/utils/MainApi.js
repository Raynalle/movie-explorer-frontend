class MainApi {
    constructor({baseUrl,}) 
    {
      this._baseUrl = baseUrl;
    }
  
    register (name, email, password) {
      return fetch(`${this._baseUrl}/signup`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({ name, email, password})
      })
      .then(this._checkResStatus);
    }; 
  
    authorize(email, password) {
      return fetch(`${this._baseUrl}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({password, email})
      })
      .then(this._checkResStatus);
    }; 
  
    authUser (token) {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        mode: 'cors',
      })
      .then(this._checkResStatus);
    };
  
    getUser() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json'
        },
        mode: 'cors',
      })
      .then(this._checkResStatus);
    }
  
    updateUser(name, email) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({name, email})
      })
      .then(this._checkResStatus);
    }
  
    getMovies() {
      return fetch(`${this._baseUrl}/movies`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json'
        },
        mode: 'cors',
      })
      .then(this._checkResStatus);
    }
  
    addMovie(data) {
      return fetch(`${this._baseUrl}/movies`, {
          method: "post",
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: `https://api.nomoreparties.co/beatfilm-movies${data.image.url}`,
            trailerLink: data.trailerLink,
            thumbnail: `https://api.nomoreparties.co/beatfilm-movies${data.image.formats.thumbnail.url}`,
            movieId: data.id,
            nameRU: data.nameRU,
            nameEN: data.nameEN,
          })
      })
      .then(this._checkResStatus);
    }
  
    deleteMovie(id) {
      return fetch(`${this._baseUrl}/movies/${id}`, {
          method: "delete",
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
          },
          mode: 'cors',
      })
      .then(this._checkResStatus);
    }
  
    _checkResStatus (res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
  }
  
  const mainApi = new MainApi({
    baseUrl: 'http://localhost:3000',
  });
  
  export default mainApi;