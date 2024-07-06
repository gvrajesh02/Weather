import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import weather from '../assets/weather/weather.svg';
import { CardMedia } from '@mui/material';

const defaultTheme = createTheme();

const SignIn = ({ onAuthenticate, onUserData }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);
    const [isSignUp, setIsSignUp] = React.useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isSignUp) {
            handleSignUp();
        } else {
            handleSignIn();
        }
    };

    const handleSignIn = () => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
            onAuthenticate(true);
            onUserData(storedUserData);
            navigate('/');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    const handleSignUp = () => {
        localStorage.setItem('userData', JSON.stringify({ email, password }));
        alert('User registered successfully!');
        setIsSignUp(false);
    };

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
        setEmail('');
        setPassword('');
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            'radial-gradient(circle at 53% 25%, rgba(203, 203, 203,0.04) 0%, rgba(203, 203, 203,0.04) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 48% 27%, rgba(22, 22, 22,0.04) 0%, rgba(22, 22, 22,0.04) 45%,transparent 45%, transparent 100%),radial-gradient(circle at 65% 50%, rgba(219, 219, 219,0.04) 0%, rgba(219, 219, 219,0.04) 61%,transparent 61%, transparent 100%),radial-gradient(circle at 78% 82%, rgba(229, 229, 229,0.04) 0%, rgba(229, 229, 229,0.04) 26%,transparent 26%, transparent 100%),radial-gradient(circle at 99% 75%, rgba(96, 96, 96,0.04) 0%, rgba(96, 96, 96,0.04) 31%,transparent 31%, transparent 100%),radial-gradient(circle at 17% 28%, rgba(188, 188, 188,0.04) 0%, rgba(188, 188, 188,0.04) 15%,transparent 15%, transparent 100%),radial-gradient(circle at 19% 19%, rgba(25, 25, 25,0.04) 0%, rgba(25, 25, 25,0.04) 68%,transparent 68%, transparent 100%),radial-gradient(circle at 35% 23%, rgba(31, 31, 31,0.04) 0%, rgba(31, 31, 31,0.04) 18%,transparent 18%, transparent 100%),linear-gradient(90deg, rgb(138, 193, 238),rgb(20, 21, 171));',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                    }}
                >
                    <Typography
                        variant="h5"
                        component="a"
                        sx={{
                            display:'flex',
                            justifyContent:'center',
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                            paddingTop:'20px',
                            color:'white'
                        }}
                    >
                        WEATHER
                    </Typography>
                    <Box>
                        <CardMedia
                            component="img"
                            sx={{ padding:'40px', marginTop:'10px' }}
                            image={weather}
                            alt="Weather image"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            {isSignUp ? 'Sign up' : 'Sign in'}
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {isSignUp && (
                                <FormControlLabel
                                    control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} color="primary" />}
                                    label="Remember me"
                                />
                            )}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {isSignUp ? 'Sign Up' : 'Sign In'}
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link variant="body2" onClick={toggleSignUp}>
                                        {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default SignIn;
