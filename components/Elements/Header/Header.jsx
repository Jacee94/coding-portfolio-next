import React, { useState } from "react";
import { Box, Typography, Collapse } from "@mui/material";
import HeaderAvatar from "../../Atoms/HeaderAvatar/HeaderAvatar";
import HeaderNav from "../../Composites/HeaderNav/HeaderNav";
import headerStyles from "./Header.styles";
import Technologies from "../Technologies/Technologies";

export default function Header(props) {
  const {
    refProp,
    navProjectsClick,
    navHeroClick,
    navTechnologiesClick,
    navContactClick,
    navConnectClick,
  } = props;
  const classes = headerStyles();

  const [headerAvatarHover, setHeaderAvatarHover] = useState(false);

  return (
    <Box ref={refProp} className={classes.headerContainer}>
      <Box
        className={classes.headerAvatarBox}
        onMouseEnter={() => setHeaderAvatarHover(true)}
        onMouseLeave={() => setHeaderAvatarHover(false)}
      >
        <HeaderAvatar />
        <Collapse in={headerAvatarHover} orientation="horizontal" timeout={300}>
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

      <HeaderNav
        navHeroClick={navHeroClick}
        navProjectsClick={navProjectsClick}
        navTechnologiesClick={navTechnologiesClick}
        navContactClick={navContactClick}
        navConnectClick={navConnectClick}
      />
    </Box>
  );
}
