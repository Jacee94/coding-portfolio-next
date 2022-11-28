import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import HeaderNavStyles from "./HeaderNav.styles";
import useWindowDimensions from "../../../helpers/useWindowDimensions";
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import DataObjectIcon from '@mui/icons-material/DataObject';
import LinkIcon from '@mui/icons-material/Link';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function HeaderNav() {
  const classes = HeaderNavStyles();
  const windowDimensions = useWindowDimensions();
  
  const [ value, setValue ] = useState(0);
  const [ isMobile, setIsMobile ] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if(windowDimensions){
      const { width } = windowDimensions;
      width < 1024 ? setIsMobile(true) : setIsMobile(false);
    }
  }, [windowDimensions])

  return (
    <Box>
      {!isMobile ? (
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
        >
          <LinkTab className={classes.tab} label="About Me"></LinkTab>
          <LinkTab className={classes.tab} label="Projects"></LinkTab>
          <LinkTab className={classes.tab} label="Technologies"></LinkTab>
          <LinkTab className={classes.tab} label="Connect"></LinkTab>
          <LinkTab className={classes.tab} label="Contact"></LinkTab>
        </Tabs>
      ) : (
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
        >
          <LinkTab className={classes.tab} icon={<PersonIcon/>}></LinkTab>
          <LinkTab className={classes.tab} icon={<WorkIcon/>}></LinkTab>
          <LinkTab className={classes.tab} icon={<DataObjectIcon/>}></LinkTab>
          <LinkTab className={classes.tab} icon={<LinkIcon/>}></LinkTab>
          <LinkTab className={classes.tab} icon={<ContactMailIcon/>}></LinkTab>
        </Tabs>
      )}
    </Box>
  );
}
