import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(id);
    
    navigate(`/movie/${id}`);
  };

  return (
    <Card sx={{ cursor: "pointer", boxShadow: "none" }}>
      <CardActionArea onClick={()=>handleClick(movie.id)}>
        <CardMedia
          component="img"
          width="500"
          height="500"
          sx={{objectFit:"cover"}}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography variant="h6" textAlign="center">
            {movie.title}
          </Typography>
          <Typography variant="body2" textAlign="center">
            Rating: {movie.vote_average.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
