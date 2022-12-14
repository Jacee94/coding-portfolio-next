import { createUseStyles } from "react-jss";

export const heroContentStyles = createUseStyles({
  heroContentContainer: {
    zIndex: 1,
    display: "flex !important",
    position: "static !important",
    alignItems: "center",

    "& > *": {
      margin: 40,
    },
  },
  heroContentTitle: {
    display: "flex",
    color: "white",
    maxWidth: "min-content",
    textAlign: "center",
    textShadow: "5px 5px 5px black",

    "& h2": {
      fontFamily: "Source Sans Pro",
    },
  },
  heroContentAboutContainer: {
    display: "flex",
    backgroundImage:
      "linear-gradient(rgba(23,37,49,0.75), rgba(69,111,147,0.75))",
    border: "solid 3px #172531",
    borderRadius: 20,
    transition: ["transform"],
    transitionDuration: 250,

    "& > *": {
      margin: 20,
    },

    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  heroContentAboutImgWrapper: {
    "& img": {
      height: 300,
      width: 300,
      borderRadius: 20,
      border: "solid 2px #172531",
    },
  },
  heroContentAboutDesc: {
    color: "white",
    marginRight: 40,
    width: 300,
    padding: "10px 0 0 0",

    "& h3": {
      fontFamily: "Source Sans Pro",
      fontSize: 28,
      marginBottom: 20,
    },

    "& p": {
      fontFamily: "Source Sans Pro",
      marginBottom: 20,
      fontSize: 14,
    },

    "&:last-child": {
      marginBottom: 0,
    },
  },

  "@media (max-width: 1200px)": {
    heroContentContainer: {
      flexDirection: "column",
    },
    heroContentTitle: {
      maxWidth: "max-content",
    },
  },

  "@media (max-width: 768px)": {
    heroContentAboutContainer: {
      flexDirection: "column",
      margin: 0,
    },
    heroContentAboutImgWrapper: {
      "& > *": {
        width: "250px !important",
        height: "250px !important",
      },
    },
    heroContentAboutDesc: {
      width: 250,
      margin: "0 auto",
      paddingTop: 0,
      "& > *": {
        textAlign: "center",
      },
    },
  },
});
