import { createUseStyles } from "react-jss";

export const technologiesStyles = createUseStyles({
  technologiesSection: {
    height: 700,
    scrollMarginTop: "108px",
    padding: 40,
  },
  technologiesTitle: {
    display: "flex",
    justifyContent: "center",
    color: "white",

    "& > *": {
      fontFamily: "Source Sans Pro",
    },
  },
});
