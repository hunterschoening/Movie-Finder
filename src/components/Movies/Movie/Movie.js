import React from "react";
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";


const Movie = ({ movie }) => {
    return (
        <Card 
            elevation={6} 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '15px',
                height: '100%',
                position: 'relative',
            }}>
            <CardMedia 
                image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                component="img"
                sx={{
                    objectFit: "contain",
                }}
            />
        </Card>
    );
}

export default Movie;