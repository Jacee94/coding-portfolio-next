import { createUseStyles } from "react-jss";

export const projectCardStyles = createUseStyles({
  projectCard: {
    backgroundColor: "#172531",
    minWidth: 300,
    margin: 20,
  },
  projectCardTitle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  projectCardDescription: {
    color: "white",
    flexGrow: 1,
  },
});
