import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { connectStyles } from "./Connect.styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";

export default function Connect(props) {
  const { refProp } = props;
  const classes = connectStyles();

  return (
    <Box ref={refProp} className={classes.connectSection}>
      <Typography variant="h3">Connect</Typography>
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
