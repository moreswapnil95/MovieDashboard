import { AppBar, Button, Stack, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
  
    const handleSearch = () => {
      if (search) {
        navigate(`/search?query=${search}`);
      }
    };

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Left Side Navbar */}
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
          <Typography>MovieDB</Typography>
        </Stack>
        
        {/* Right Side Search Input and Button */}
        <Stack direction="row" spacing={2}>
        <Button color="inherit"  onClick={() => navigate('/')}>Popular</Button>
          <Button color="inherit" onClick={() => navigate('/top-rated')}>Top Rated</Button>
          <Button color="inherit" onClick={() => navigate('/upcoming')}>Upcoming</Button>
          <TextField
            variant="outlined"
            placeholder="Movie Name..."
            id="outlined-basic"
            value={search}
            size='small'
            inputProps={{
              style: {background:"white",borderRadius:"5px"}
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button className='search-btn' variant='contained' onClick={handleSearch}>Search</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar