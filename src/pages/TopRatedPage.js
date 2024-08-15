import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTopRatedMovies } from '../slices/moviesSlices';
import { Grid } from '@mui/material';
import MovieCard from '../components/MovieCard';

const TopRatedPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.topRatedMovies);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1');
      const data = await response.json();
      dispatch(setTopRatedMovies(data.results));
    };
    fetchTopRatedMovies();
  }, [dispatch]);

  return (
    <Grid container spacing={3} padding="2rem !important">
      {movies.map(movie => (
        <Grid item xs={12} sm={6} md={3} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  )
}

export default TopRatedPage