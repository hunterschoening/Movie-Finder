import * as api from '../api';

export const getPopularMovies = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchPopularMovies(page);
        data.results = data.results.filter(movie => movie.poster_path != null);
        dispatch({ type: 'FETCH_POPULAR', payload: data.results });
    } catch (error) {
        console.log(error);
    }
}

export const getTheaterMovies = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchTheaterMovies(page);
        data.results = data.results.filter(movie => movie.poster_path != null);
        dispatch({ type: 'FETCH_THEATER', payload: data.results });
    } catch (error) {
        console.log(error);
    }
}

export const getUpcomingMovies = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchUpcomingMovies(page);
        data.results = data.results.filter(movie => movie.poster_path != null);
        dispatch({ type: 'FETCH_UPCOMING', payload: data.results });
    } catch (error) {
        console.log(error);
    }
}

export const getTopRatedMovies = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchTopRatedMovies(page);
        data.results = data.results.filter(movie => movie.poster_path != null);
        dispatch({ type: 'FETCH_TOP_RATED', payload: data.results });
    } catch (error) {
        console.log(error);
    }
}