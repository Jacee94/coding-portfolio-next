import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Collapse } from "@mui/material";
import HeaderAvatar from "../../Atoms/HeaderAvatar/HeaderAvatar";
import HeaderNav from "../../Composites/HeaderNav/HeaderNav";
import headerStyles from "./Header.styles";

export default function Header() {
  const classes = headerStyles();

  const [headerAvatarHover, setHeaderAvatarHover] = useState(false);

  return (
    <Box className={classes.headerContainer}>
      <Box
        className={classes.headerAvatarBox}
        onMouseEnter={() => setHeaderAvatarHover(true)}
        onMouseLeave={() => setHeaderAvatarHover(false)}
      >
        <HeaderAvatar />
        <Collapse in={headerAvatarHover} orientation="horizontal" timeout={500}>
          <Box className={classes.headerTitleTextBox}>
            <Typography variant="h1" className={classes.headerTitleText}>
              Jace Edwards
            </Typography>
            <Typography variant="h1" className={classes.headerTitleText}>
              Coding Portfolio
            </Typography>
          </Box>
        </Collapse>
      </Box>

      <HeaderNav></HeaderNav>
    </Box>
  );
}
