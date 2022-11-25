import React from "react";
import { Box, Typography } from '@mui/material';
import HeaderAvatar from '../../Atoms/HeaderAvatar/HeaderAvatar';
import { createUseStyles } from "react-jss";

const headerStyles = createUseStyles({
    headerContainer: {
        backgroundColor: "#294257",
        padding: 20
    }
})

export default function Header(){
    const classes = headerStyles();

    return (
        <Box className={classes.headerContainer}>
            <HeaderAvatar/>
            <Typography variant='h1' className={classes.headerTitleText}>Jace Edwards Coding Portfolio</Typography>
        </Box>
    )
}
