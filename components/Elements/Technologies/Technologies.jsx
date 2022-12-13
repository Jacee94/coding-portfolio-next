import React from "react";
import { Box, Typography } from "@mui/material";
import { technologiesStyles } from "./Technologies.styles";
import TechnologiesCards from "../../Composites/TechnologiesCards/TechnologiesCards";

export default function Technologies(props) {
  const { refProp } = props;
  const classes = technologiesStyles();

  return (
    <Box ref={refProp} className={classes.technologiesSection}>
      <Box className={classes.technologiesTitle}>
        <Typography variant="h3">Technologies</Typography>
      </Box>
      <TechnologiesCards />
    </Box>
  );
}
