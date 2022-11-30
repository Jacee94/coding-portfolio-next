import { createUseStyles } from "react-jss";

export const technologiesStyles = createUseStyles({
    technologiesSection: {
        height: 700,
    },
    technologiesTitle: {
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        margin: 40,

        '& > *': {
            fontFamily: 'Source Sans Pro',
        }
    }
})
