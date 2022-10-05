import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';

import Movies from '../Movies/Movies';

import { getUpcomingMovies } from '../../actions/movies';

const Upcoming = () => {
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movies);

    console.log(movies);

    useEffect(() => {
        dispatch(getUpcomingMovies());
    }, [])
    return (
        <Container maxWidth="xl" sx={{ paddingTop: "15px" }}>
            <Movies />
        </Container>
    )
}

export default Upcoming;