import React from "react";
import { Box, Typography } from "@mui/material";
import { heroContentStyles } from "./HeroContent.styles";

export default function(){
    const classes = heroContentStyles();

    return (
        <Box className={classes.heroContentContainer}>
            <Box className={classes.heroContentTitle}>
                <Typography variant={'h2'}>About Me</Typography>
            </Box>
        </Box>
    )
}