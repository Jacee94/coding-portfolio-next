import React from "react";
import { Box, Typography } from "@mui/material";
import { projectStyles } from './Projects.styles';

export default function Projects(props) {
    const { refProp } = props;
    const classes = projectStyles();

    return (
        <Box ref={refProp} className={classes.projectSection}>
            <Box className={classes.projectsTitle}>
                <Typography variant="h3">Projects</Typography>
            </Box>
        </Box>
    )
}
