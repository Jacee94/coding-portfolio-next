import React, { useRef } from "react";
import { Box } from "@mui/material";
import { heroStyles } from "./Hero.styles";
import { HeroContent } from "../../index";

export default function Hero(props) {
    const { refProp } = props;
    const classes = heroStyles();

    return (
        <Box ref={refProp} className={classes.heroContainer}>
            <HeroContent></HeroContent>
        </Box>
    )
}
