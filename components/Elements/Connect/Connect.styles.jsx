import { createUseStyles } from "react-jss";

export const connectStyles = createUseStyles({
  connectSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "calc(100vh - 74px)",
    scrollMarginTop: "108px",
    padding: 40,
  },
  connectTitle: {},
  connectContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  "@media (max-width: 1200px)": {
    connectSection: {
      height: "calc(100vh - 74px)",
      scrollMarginTop: "74px",
    },
  },
});
