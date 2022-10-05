import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import Movies from '../Movies/Movies';

import { getTheaterMovies } from "../../actions/movies";

let page = 1;

const InTheaters = () => {
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movies);

    const fetchData = () => {
        dispatch(getTheaterMovies(page));
        page = page + 1;
    }

    useEffect(() => {
        dispatch(getTheaterMovies());
        page = page + 1;
    }, [])

    return (
        <InfiniteScroll
            dataLength={movies.length}
            next={() => {
                fetchData()
            }}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={<h4>You've seen it all!</h4>}
        >
            <Container maxWidth="xl" sx={{ paddingTop: "15px" }}>
                <Movies />
            </Container>
        </InfiniteScroll>
    )
}

export default InTheaters;