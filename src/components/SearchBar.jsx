import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <TextField
        variant="outlined"
        label="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
