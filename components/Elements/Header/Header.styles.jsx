import { createUseStyles } from "react-jss";

const headerStyles = createUseStyles({
  headerContainer: {
    display: "flex",
    justifyContent: 'end',
    alignItems: 'center',
    backgroundColor: "#294257",
    borderBottom: '3px solid black',
    borderTop: '3px solid black',
    padding: '15px 40px 15px 30px',
    height: 'auto',
  },
  headerAvatarBox: {
    display: "flex",
    backgroundColor: "#203344",
    borderRadius: 60,
    width: "fit-content",
    height: "fit-content",
    border: 'solid 2px black',
    transition: ["padding"],
    transitionDuration: 300,

    position: 'absolute',
    left: 30,
    zIndex: 1,

    "&:hover": {
      padding: 10,
    },
  },
  headerTitleTextBox: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 15,
    marginRight: 10,
  },
  headerTitleText: {
    fontFamily: '"Source Code Pro"',
    color: "white",
    fontSize: 25,
    whiteSpace: "nowrap",
  },

  '@media (max-width: 1200px)': {
    headerContainer: {
      height: 'auto',
      padding: 10
    },
    headerAvatarBox: {
      left: 15,

      "&:hover": {
        padding: 5,
      },
    },
    headerTitleText: {
      fontSize: 18,
    },
  },
});

export default headerStyles;
