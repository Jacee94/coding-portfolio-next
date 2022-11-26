import React from "react";
import { Box } from "@mui/material";
import { heroStyles } from "./Hero.styles";
import { HeroContent } from "../../index";

export default function Hero() {
    const classes = heroStyles();

    return (
        <Box className={classes.heroContainer}>
            <HeroContent></HeroContent>
        </Box>
    )
}
