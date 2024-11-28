//import React from "react";
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
//Modificaciones se importo Box y Paper
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
//importar slideshow
import SlideShow from '../../components/SlideShow'

//Se agrego un style (const item)
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "white",
    //backgroundColor: "transparent",
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
    }),
  }));

export default function Home () {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, "3000");
    });

    return (
        
        <Grid sx={{display: 'flex', flexDirection: 'column'}} size={12}>
            {isLoading ?
                <>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid size={12}>
                                <Item em>
                                    <CircularProgress/>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box> 
                </>
                :
                <>
                    <Box sx={{ flexGrow: 1}}>
                        <Grid container spacing={1}>
                            <Grid size={12}>
                                <Item em>
                                    <Grid container spacing={1}>
                                        <Grid size={12}>
                                            <SlideShow/>
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>                   
                    
                </>
            }
        </Grid>
    );
};