import { createUseStyles } from "react-jss";

export const projectCardStyles = createUseStyles({
  projectCard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#172531",
    minWidth: 350,
    maxWidth: 350,
    margin: 20,
  },
  projectCardTitle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  projectCardBottom: {
    display: "flex",
    flexDirection: "column",
  },
  projectCardDescription: {
    color: "white",
    flexGrow: 1,
    maxHeight: 179,
  },
  projectCardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
});
