import React, { useRef, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { heroStyles } from "./Hero.styles";
import { HeroContent } from "../../index";
import Parallax from "parallax-js";

export default function Hero(props) {
  const { refProp } = props;
  const classes = heroStyles();

  const sceneRef = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneRef.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <Box>
      <Box ref={refProp} className={classes.heroContainer}>
        <Box ref={sceneRef} className={classes.bgImageContainer}>
          <img src="/bio-bg.jpg" className={classes.bgImage} data-depth=".50" />
        </Box>
        <HeroContent />
      </Box>
    </Box>
  );
}
