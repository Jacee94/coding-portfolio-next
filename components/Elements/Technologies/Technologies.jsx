import React from "react";
import { Box } from "@mui/material";
import { technologiesStyles } from "./Technologies.styles";
import TechnologiesCards from "../../Composites/TechnologiesCards/TechnologiesCards";
import { SectionTitle } from "../..";

export default function Technologies(props) {
  const { refProp } = props;
  const classes = technologiesStyles();

  return (
    <Box ref={refProp} className={classes.technologiesSection}>
      <SectionTitle title="Technologies" />
      <TechnologiesCards />
    </Box>
  );
}
