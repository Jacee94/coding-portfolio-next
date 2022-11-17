import React from "react";
import Box from '@mui/material/Box';
import HeaderAvatarChip from '../../Atoms/HeaderAvatar/HeaderAvatarChip';
import styles from "./Header.styles";
import { createUseStyles } from 'react-jss';

export default function Header(props){
    const useStyles = createUseStyles(styles);
    const classes = useStyles(props);

    return (
        <Box className={classes.headerContainer}>
            <HeaderAvatarChip/>
        </Box>
    )
}