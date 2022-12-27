import { createUseStyles } from "react-jss";

export const technologiesStyles = createUseStyles({
  technologiesSection: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 74px)",
    scrollMarginTop: "108px",
    padding: 40,
  },
  technologiesTitle: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    textShadow: "3px 3px 3px black",

    "& > *": {
      fontFamily: "Source Sans Pro",
    },
  },

  "@media (max-width: 1200px)": {
    technologiesSection: {
      scrollMarginTop: "74px",
    },
  },
});
