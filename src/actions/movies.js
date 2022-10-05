import * as api from '../api';

export const getPopularMovies = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchPopularMovies(page);
        dispatch({ type: 'FETCH_POPULAR', payload: data.results });
    } catch (error) {
        console.log(error);
    }
}

export const getTheaterMovies = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchTheaterMovies(page);
        dispatch({ type: 'FETCH_THEATER', payload: data.results });
    } catch (error) {
        console.log(error);
    }
}

export const getUpcomingMovies = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchUpcomingMovies(page);
        dispatch({ type: 'FETCH_UPCOMING', payload: data.results });
    } catch (error) {
        console.log(error);
    }
}

export const getTopRatedMovies = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchTopRatedMovies(page);
        dispatch({ type: 'FETCH_TOP_RATED', payload: data.results });
    } catch (error) {
        console.log(error);
    }
}