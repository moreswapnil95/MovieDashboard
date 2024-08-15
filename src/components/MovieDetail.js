import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";


const MovieDetail = ({ movie, cast }) => {
  const genrefunction = (genres) => {
    const name = genres.map((genre) => genre?.name).join(",");
    return name;
  };
  
  

  return (
    <>
      <div style={{ padding: "3rem" }}>
        <Grid
          container
          spacing={3}
          className="background-detail"
          sx={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
          }}
        >
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ boxShadow: "none" ,width:"80% !important"}}>
              <CardActionArea>
                <Box sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 200, objectFit: "cover" }}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <CardContent sx={{ width: "100%", backgroundColor: "#020b16" }}>
                    <Typography variant="h4" marginTop="2rem">{movie.title}</Typography>
                    <Typography variant="h6" color="#496381" marginBottom="1.5rem">
                      Rating: {movie.vote_average}
                    </Typography>
                    <Stack flexDirection="row" justifyContent="flex-start" marginBottom="1.5rem">
                    <Typography variant="h7" color="#a6a8ad">{movie.runtime} min </Typography>
                    <Typography variant="h7" marginLeft="10px" color="#8b8f94">
                      {movie?.genres && genrefunction(movie?.genres)}
                    </Typography>
                    </Stack>
                    <Typography color="#a6a8ad" variant="h7">Release Date: {movie.release_date}</Typography>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
            <Typography variant="h4" marginTop="1rem" marginBottom="0.5rem">Overview</Typography>
            <Box marginBottom="1rem">
            <Typography fontSize={14} >
              {movie.overview}
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={3} padding="1rem !important">
    
        {cast.map((actor) => (
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Card sx={{boxShadow:"none"}}>
              <CardMedia
                component="img"
                alt={actor.name}
                height="300"
                width={500}
                image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              />
              <CardContent>
                <Typography variant="h6" textAlign="left">
                  {actor.name}
                </Typography>
                <Typography variant="body2" textAlign="left">
                  {actor.character}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

      </Grid>
    </>
  );
};

export default MovieDetail;
