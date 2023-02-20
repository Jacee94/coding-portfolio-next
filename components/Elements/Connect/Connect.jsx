import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { connectStyles } from "./Connect.styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import { SectionTitle } from "../..";


export default function Connect(props) {
  const { refProp } = props;
  const classes = connectStyles();

  return (
    <Box ref={refProp} className={classes.connectSection}>
      <SectionTitle title={"Connect"}/>
      <Box className={classes.connectContent}>
        <Box className={classes.connectLink}>
          <LinkedInIcon />
          <Link
            href="https://www.linkedin.com/in/jace-edwards94/"
            target="_blank"
          >
            Jace Edwards LinkedIn Profile
          </Link>
        </Box>
        <Box className={classes.connectLink}>
          <GitHubIcon />
          <Link href="https://github.com/Jacee94" target="_blank">
            Jace Edwards GitHub
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
