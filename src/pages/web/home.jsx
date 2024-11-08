//import React from "react";
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid2';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, "3000");
    });

    return (
        <Grid sx={{paddingTop: '50px', marginLeft:'30px', display: 'flex', flexDirection: 'column', height: '100vh', width: '100%' }} size={12}>
            {isLoading ?
                <>
                    <CircularProgress/>
                </>
                :
                <>
                    <h1>Home</h1>
                    <p>Welcome to the Home page</p>
                    <p> Hola xanoto</p>
                </>
            }
        </Grid>
    );
};
export default Home;