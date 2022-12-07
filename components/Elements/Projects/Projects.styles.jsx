import { createUseStyles } from "react-jss";

export const projectStyles = createUseStyles({
  projectSection: {
    height: 700,
    scrollMarginTop: "108px",
    padding: 40,
  },
  projectsTitle: {
    display: "flex",
    justifyContent: "center",
    color: "white",

    "& > *": {
      fontFamily: "Source Sans Pro",
    },
  },
  projectsImageWrapper: {
    position: "relative",
  },
});
