import * as api from '../api';

export const getPopularMovies = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPopularMovies();
        dispatch({ type: 'FETCH_POPULAR', payload: data.results });
    } catch (error) {
        console.log(error);
    }
}

export const getTheaterMovies = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTheaterMovies();
        dispatch({ type: 'FETCH_THEATER', payload: data.results });
    } catch (error) {
        console.log(error);
    }
}

export const getUpcomingMovies = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUpcomingMovies();
        dispatch({ type: 'FETCH_UPCOMING', payload: data.results });
    } catch (error) {
        console.log(error);
    }
}

export const getTopRatedMovies = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTopRatedMovies();
        dispatch({ type: 'FETCH_TOP_RATED', payload: data.results });
    } catch (error) {
        console.log(error);
    }
}