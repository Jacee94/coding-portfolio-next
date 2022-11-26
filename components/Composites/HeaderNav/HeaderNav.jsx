import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import HeaderNavStyles from "./HeaderNav.styles";

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

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
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
    </Box>
  );
}
