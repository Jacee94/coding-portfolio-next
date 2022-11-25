import React from "react";
import { Box, Typography } from '@mui/material';
import HeaderAvatar from '../../Atoms/HeaderAvatar/HeaderAvatar';
import headerStyles from "./Header.styles";

export default function Header(){
    const classes = headerStyles();

    return (
        <Box className={classes.headerContainer}>
            <Box className={classes.headerAvatarBox}>
                <HeaderAvatar/>
                <Box className={classes.headerTitleTextBox}>
                    <Typography variant='h1' className={classes.headerTitleText}>Jace Edwards</Typography>
                    <Typography variant='h1' className={classes.headerTitleText}>Coding Portfolio</Typography>
                </Box>
            </Box>
        </Box>
    )
}
