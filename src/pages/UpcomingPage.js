import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUpcomingMovies } from '../slices/moviesSlices';
import { Grid } from '@mui/material';
import MovieCard from '../components/MovieCard';

const UpcomingPage = () => {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.upcomingMovies);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1');
      const data = await response.json();
      dispatch(setUpcomingMovies(data.results));
    };
    fetchUpcomingMovies();
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

export default UpcomingPage