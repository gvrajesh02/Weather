import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import weatherImages from '../assets/weatherImages'; // Adjust path as necessary
import Box from '@mui/material/Box';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  background: 'linear-gradient(160deg, skyblue, #E8F0FE)',
  width: 500,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const WeatherCard = ({ weather }) => {
  const weatherImage = weatherImages[weather.conditions] || weatherImages['Default'];

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" gutterBottom fontWeight={'bold'} textAlign={'center'}>
          {weather.city}
        </Typography>
        <Box display={'flex'} justifyContent="space-around">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h3" component="div" fontSize={'60px'}>
              {weather.temp}
            </Typography>
            <Typography variant="h6" component="div" sx={{ ml: 1, fontSize: '1.5rem' }}>
              <span>&#176;</span>C
            </Typography>
          </Box>
          <Box>
            <CardMedia
              component="img"
              sx={{ width: 150, margin: 'auto' }}
              image={weatherImage}
              alt="Weather image"
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-around" mt={2}>
          <Box textAlign="center">
            <Typography variant="subtitle2" gutterBottom fontWeight={'bold'}>
              Humidity
            </Typography>
            <Typography variant="body2">{weather.humidity}%</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="subtitle2" gutterBottom fontWeight={'bold'}>
              Wind
            </Typography>
            <Typography variant="body2">{weather.wind} {weather.units === "imperial" ? "mph" : "m/s"}</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="subtitle2" gutterBottom fontWeight={'bold'}>
              Conditions
            </Typography>
            <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>{weather.conditions}</Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default WeatherCard;
