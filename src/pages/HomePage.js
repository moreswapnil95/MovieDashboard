import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopularMovies } from '../slices/moviesSlices';
import { Grid } from '@mui/material';
import MovieCard from '../components/MovieCard';

const HomePage = () => {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.popularMovies);

  console.log(movies);
  

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1');
      const data = await response.json();
      dispatch(setPopularMovies(data.results));
    };
    fetchPopularMovies();
  }, [dispatch]);

  return (
    <Grid container spacing={3} padding="2rem !important">
      {movies.map(movie => (
        <Grid item xs={12} sm={6} md={3} key={movie.id}>
          <MovieCard movie={movie}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default HomePage