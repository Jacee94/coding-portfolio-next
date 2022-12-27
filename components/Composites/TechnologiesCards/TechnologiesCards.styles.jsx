import { createUseStyles } from "react-jss";

export const techCardsStyles = createUseStyles({
  techCardsWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1,
    paddingBottom: 56,
  },
  techCardsScroller: {
    display: "flex",
    padding: 40,
    overflowX: "scroll",
    maxHeight: 325,
  },
});

export default techCardsStyles;
