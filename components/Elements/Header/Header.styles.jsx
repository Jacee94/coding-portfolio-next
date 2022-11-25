import { grey } from "@mui/material/colors";
import { createUseStyles } from "react-jss";

const headerStyles = createUseStyles({
    headerContainer: {
        backgroundColor: "#294257",
        padding: 20,
        display: 'flex'
    },
    headerAvatarBox: {
        display: 'flex',
        border: '2px solid #a3a3a3',
        padding: 10,
        borderRadius: 50
    },
    headerTitleTextBox: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 0,
        overflow: 'hidden'
    },
    headerTitleText: {
        fontFamily: '"Source Code Pro"',
        color: 'white',
        fontSize: '30px'
    }
})

// marginLeft: 15,
// marginRight: 10,

export default headerStyles;