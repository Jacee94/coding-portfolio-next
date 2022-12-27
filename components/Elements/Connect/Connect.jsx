import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { connectStyles } from "./Connect.styles";

export default function Connect(props) {
  const { refProp } = props;
  const classes = connectStyles();

  return (
    <Box ref={refProp}>
      <Typography variant="h3">Connect</Typography>
      <Box>
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="jace-edwards94"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://www.linkedin.com/in/jace-edwards94?trk=profile-badge"
          >
            Jace Edwards
          </a>
        </div>
      </Box>
    </Box>
  );
}
