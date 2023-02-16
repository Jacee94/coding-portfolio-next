import React from "react";
import { Box } from "@mui/material";
import { ProjectsCards } from "../../index";
import { projectStyles } from "./Projects.styles";
import { SectionTitle } from "../..";

export default function Projects(props) {
  const { refProp } = props;
  const classes = projectStyles();

  return (
    <Box ref={refProp} className={classes.projectSection}>
      <SectionTitle title="Projects" />
      <ProjectsCards />
    </Box>
  );
}
