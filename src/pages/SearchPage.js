import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setSearchResults } from '../slices/searchSlices';
import { Grid } from '@mui/material';
import MovieCard from '../components/MovieCard';

const SearchPage = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const results = useSelector(state => state.search.results);

  useEffect(() => {
    if (query) {
      const fetchSearchResults = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=1`);
        const data = await response.json();
        dispatch(setSearchResults(data.results));
      };
      fetchSearchResults();
    }
  }, [dispatch, query]);

  return (
    <Grid container spacing={3} padding="2rem !important">
      {results.map(movie => (
        <Grid item xs={12} sm={6} md={3} key={movie.id}>
          <MovieCard movie={movie}  />
        </Grid>
      ))}
    </Grid>
  )
}

export default SearchPage