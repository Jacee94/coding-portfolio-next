import { createUseStyles } from "react-jss";

const headerStyles = createUseStyles({
    headerContainer: {
        display: 'flex',
        backgroundColor: "#294257",
        padding: 20,
        height: 145
    },
    headerAvatarBox: {
        display: 'flex',
        alignSelf: 'center',
        backgroundColor: '#203344',
        borderRadius: 60,
        width: 'fit-content',
        height: 'fit-content',
        transition: ['padding'],
        transitionDuration: 500,

        '&:hover': {
            padding: 15
        }
    },
    headerTitleTextBox: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 15,
        marginRight: 10,
    },
    headerTitleText: {
        fontFamily: '"Source Code Pro"',
        color: 'white',
        fontSize: '30px',
        whiteSpace: 'nowrap'
    }
})

export default headerStyles;