import { createUseStyles } from "react-jss";

export const techCardStyles = createUseStyles({
  techCardWrapper: {
    fontFamily: "Source Sans Pro",
    background: "#172531",
    color: "white",
    width: 150,
    padding: 20,
    transition: ["background"],
    transitionDuration: 200,
    margin: 20,

    "& > icon": {
      color: "white",
    },

    "&:hover": {
      background: "#1a2a38",
    },
  },

  techCardIcon: {
    display: "flex",
    justifyContent: "center",
    fontSize: 100,
  },

  techCardTitle: {
    display: "flex",
    justifyContent: "center",
    fontSize: 30,
    marginTop: 10,
  },
});

export default techCardStyles;
