import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab, Tooltip } from "@mui/material";
import HeaderNavStyles from "./HeaderNav.styles";
import useWindowDimensions from "../../../helpers/useWindowDimensions";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import DataObjectIcon from "@mui/icons-material/DataObject";
import LinkIcon from "@mui/icons-material/Link";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function LinkTab(props) {
  const { isMobile, ...tabProps } = props;
  const newLabel = isMobile ? null : tabProps.label;
  const tooltipTitle = !isMobile ? null : tabProps.label;

  return (
    <Tooltip title={tooltipTitle} enterTouchDelay={0}>
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...tabProps}
        label={newLabel}
      />
    </Tooltip>
  );
}

export default function HeaderNav(props) {
  const {navHeroClick, navProjectsClick, navTechnologiesClick} = props;

  const classes = HeaderNavStyles();
  const windowDimensions = useWindowDimensions();

  const [value, setValue] = useState(0);
  const [isMobile, setIsMobile] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (windowDimensions) {
      const { width } = windowDimensions;
      width < 1200 ? setIsMobile(true) : setIsMobile(false);
    }
  }, [windowDimensions]);

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
      >
        <LinkTab
          className={classes.tab}
          label="About Me"
          icon={<PersonIcon />}
          iconPosition="start"
          isMobile={isMobile}
          onClick={navHeroClick}
        />
        <LinkTab
          className={classes.tab}
          label="Projects"
          icon={<WorkIcon />}
          iconPosition="start"
          isMobile={isMobile}
          onClick={navProjectsClick}
        />
        <LinkTab
          className={classes.tab}
          label="Technologies"
          icon={<DataObjectIcon />}
          iconPosition="start"
          isMobile={isMobile}
          onClick={navTechnologiesClick}
        />
        <LinkTab
          className={classes.tab}
          label="Connect"
          icon={<LinkIcon />}
          iconPosition="start"
          isMobile={isMobile}
        />
        <LinkTab
          className={classes.tab}
          label="Contact"
          icon={<ContactMailIcon />}
          iconPosition="start"
          isMobile={isMobile}
        />
      </Tabs>
    </Box>
  );
}
