import React from "react";
import { Box, Typography } from "@mui/material";
import { heroContentStyles } from "./HeroContent.styles";

export default function () {
  const classes = heroContentStyles();

  return (
    <Box className={classes.heroContentContainer}>
      <Box className={classes.heroContentTitle}>
        <Typography variant={"h2"}>About Me</Typography>
      </Box>
      <Box className={classes.heroContentAboutContainer}>
        <Box className={classes.heroContentAboutImgWrapper}>
          <img src={"/bioImg.jpg"}></img>
        </Box>
        <Box className={classes.heroContentAboutDesc}>
          <Typography variant={"h3"}>Hey there! I'm Jace!</Typography>
          <Typography variantMapping={{ body1: "p" }}>
            I'm a 28 year old Utah native who loves everything outdoors,
            photography, 3d printing, and coding! (Of Course)
          </Typography>
          <Typography variantMapping={{ body1: "p" }}>
            I have held a variety of different jobs before deciding to pursue a
            coding career!
          </Typography>
          <Typography variantMapping={{ body1: "p" }}>
            I am currently working as a Jr. Full Stack Developer for Black Rifle
            Coffee Company, and am still taking the University of Utah Full
            Stack Coding Bootcamp!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
