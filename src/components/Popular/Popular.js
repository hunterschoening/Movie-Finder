import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material';

import InfiniteScroll from 'react-infinite-scroll-component';

import Movies from '../Movies/Movies';

import { getPopularMovies } from '../../actions/movies';

let page = 1;

const Popular = () => {
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movies);
    
    const fetchData = () => {
        dispatch(getPopularMovies(page));
        page = page + 1;
    }

    useEffect(() => {
        dispatch(getPopularMovies(page));
        page = page + 1;
    }, [])

    console.log(movies);
  
    return (
        <InfiniteScroll
            dataLength={movies.length}
            next={() => {
                fetchData()
            }}
            scrollThreshold={0.5}
            hasMore={true}
            endMessage={<h4>You've seen it all!</h4>}
        >
            <Container maxWidth="xl" sx={{ paddingTop: "15px" }}>
                <Movies />
            </Container>
        </InfiniteScroll>
    )
}

export default Popular;


// <Container maxWidth="xl" sx={{ paddingTop: "15px" }}>
        //     <Movies />
        // </Container>