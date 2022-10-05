import { ConstructionOutlined } from "@mui/icons-material";

export default (state = { movies: [] }, action) => {
    switch (action.type) {
        case 'FETCH_POPULAR':
            console.log("Fetching popular movies...");
            return { ...state, movies: action.payload };
        case 'FETCH_THEATER':
            console.log("Fetching movies in theaters...");
            console.log(action.payload);
            return { ...state, movies: action.payload };
        case 'FETCH_UPCOMING':
            console.log("Fetching upcoming movies...");
            return { ...state, movies: action.payload };
        case 'FETCH_TOP_RATED':
            console.log("Fetching top rated movies...");
            return { ...state, movies: action.payload };
        default:
            console.log("DEFAULT REDUCER");
            return { ...state };
    }
}