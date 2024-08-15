import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setMovieCast, setMovieDetail } from '../slices/moviesSlices';
import MovieDetail from '../components/MovieDetail';

const MovieDetailPage = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const movie = useSelector(state => state.movies.movieDetail);
  const cast = useSelector(state => state.movies.movieCast);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
      const data = await response.json();
      dispatch(setMovieDetail(data));
    };

    const fetchMovieCast = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
      const data = await response.json();
      dispatch(setMovieCast(data.cast));
    };

    fetchMovieDetail();
    fetchMovieCast();
  }, [dispatch, id]);

  return (
    <MovieDetail movie={movie} cast={cast} />
  )
}

export default MovieDetailPage