import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  movieDetail: {},
  movieCast: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },
    setUpcomingMovies(state, action) {
      state.upcomingMovies = action.payload;
    },
    setMovieDetail(state, action) {
      state.movieDetail = action.payload;
    },
    setMovieCast(state, action) {
      state.movieCast = action.payload;
    },
  },
});

export const {
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setMovieDetail,
  setMovieCast,
} = moviesSlice.actions;

export default moviesSlice.reducer;
