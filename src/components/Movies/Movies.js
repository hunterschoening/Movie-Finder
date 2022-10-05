import React from "react";
import { useSelector } from "react-redux";
import Grid from '@mui/material/Grid';

import Movie from "./Movie/Movie";

const Movies = () => {
    const { movies } = useSelector((state) => state.movies);

    return (
        <Grid container alignItems="stretch" spacing={3} sx={{ display: 'flex', alignItems: 'center' }}>
            {movies.map((movie) => (
                <Grid key={movie.id} item xs={6} md={3} lg={2}>
                    <Movie movie={movie}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default Movies;