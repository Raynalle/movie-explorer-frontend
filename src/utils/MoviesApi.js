class MoviesApi {
    constructor(config) {
        this._baseUrl = config.baseUrl;
    }

    _checkResponse(response) {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(`Ошибка: ${response.status}`);
    }

    getMovies() {
        return fetch(`${this._baseUrl}`,
        {
            method: 'GET',
            headers: this._headers,
        }).then(this._checkResponse);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default moviesApi;