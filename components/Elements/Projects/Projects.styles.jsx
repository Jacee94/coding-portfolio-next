import { createUseStyles } from "react-jss";

export const projectStyles = createUseStyles({
  projectSection: {
    height: "calc(100vh - 74px)",
    scrollMarginTop: "108px",
    padding: 40,
  },
  projectsTitle: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    textShadow: "3px 3px 3px black",

    "& > *": {
      fontFamily: "Source Sans Pro",
    },
  },
  projectsImageWrapper: {
    position: "relative",
  },

  "@media (max-width: 1200px)": {
    projectSection: {
      scrollMarginTop: "74px",
    },
  },
});
