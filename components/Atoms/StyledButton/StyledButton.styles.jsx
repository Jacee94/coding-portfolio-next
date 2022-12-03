import { createUseStyles } from "react-jss";

export const buttonStyles = createUseStyles({
    styledButton: {
        fontFamily: 'Source Sans Pro',
        backgroundColor: '#2e6a9e',

        '&:hover': {
            backgroundColor: '#264866'
        }
    }
});