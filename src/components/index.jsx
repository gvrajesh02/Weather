import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Skeleton from '@mui/material/Skeleton';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import Forecast from './Forecast';
import Chart from './Chart';
import NavBar from '../Layout/NavBar';
import { fetchWeatherData, fetchForecastData } from '../services/weatherService';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSearch = async (city) => {
        setLoading(true);
        const weatherData = await fetchWeatherData(city);
        if (weatherData) {
            const forecastData = await fetchForecastData(city);
            setWeather(weatherData);
            setForecast(forecastData);
        } else {
            setWeather(null);
            setForecast([]);
        }
        setLoading(false);
    };

    const WeatherCardSkeleton = () => (
        <Grid item xs={12} md={6}>
            <Skeleton variant="rectangular" height={300} animation="wave" />
        </Grid>
    );

    const ChartForecastSkeleton = () => (
        <>
            <Grid item xs={12} md={6} marginTop={'20px'}>
                <Skeleton variant="rectangular" height={300} animation="wave" />
            </Grid>
            <Grid item xs={12} md={6} marginTop={'20px'}>
                <Skeleton variant="rectangular" height={300} animation="wave" />
            </Grid>
        </>
    );

    return (
        <>
            <NavBar />
            <Container sx={{ marginTop: '20px' }}>
                <SearchBar onSearch={handleSearch} />
                <Grid container justifyContent="center" spacing={2} marginTop={'20px'}>
                    {loading && <WeatherCardSkeleton />}
                    {!loading && weather && <WeatherCard weather={weather} />}
                </Grid>
                {forecast.length > 0 && (
                    isMobile ? (
                        <>
                            {loading ? <ChartForecastSkeleton /> : (
                                <>
                                    <Grid item xs={12} md={6} marginBottom={'20px'}>
                                        <Chart data={forecast} />
                                    </Grid>
                                    <Grid item xs={12} md={6} marginBottom={'20px'}>
                                        <Forecast forecast={forecast} />
                                    </Grid>
                                </>
                            )}
                        </>
                    ) : (
                        <Grid container spacing={2} direction="row">
                            {loading ? <ChartForecastSkeleton /> : (
                                <>
                                    <Grid item xs={12} md={6} marginBottom={'20px'}>
                                        <Chart data={forecast} />
                                    </Grid>
                                    <Grid item xs={12} md={6} marginBottom={'20px'}>
                                        <Forecast forecast={forecast} />
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    )
                )}
            </Container>
        </>
    );
};

export default Weather;
