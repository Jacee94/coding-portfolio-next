import { createUseStyles } from "react-jss";

const headerStyles = createUseStyles({
  headerContainer: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#294257",
    borderBottom: '3px solid black',
    borderTop: '3px solid black',
    padding: '20px 40px 20px 30px',
    height: 145,
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

    "&:hover": {
      padding: 15,
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
    fontSize: "30px",
    whiteSpace: "nowrap",
  },
});

export default headerStyles;
