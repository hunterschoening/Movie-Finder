import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';

import Movies from '../Movies/Movies';

import { getTopRatedMovies } from '../../actions/movies';

const TopRated = () => {
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(getTopRatedMovies());
    }, [])

    return (
        <Container maxWidth="xl" sx={{ paddingTop: "15px" }}>
            <Movies />
        </Container>
    )
}

export default TopRated;