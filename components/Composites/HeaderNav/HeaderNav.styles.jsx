import { createUseStyles } from "react-jss";

const HeaderNavStyles = createUseStyles({
  tab: {
    color: "#909fad",
    textShadow: "2px 2px 2px black",
    fontFamily: "Source Sans Pro",
    fontSize: 25,
    borderRadius: "10px",
    transition: ["color", "background-color"],
    transitionDuration: 250,

    "&:not(.Mui-selected):hover": {
      backgroundColor: "#1c2d3b",
      color: "white",
    },

    "&.Mui-selected": {
      color: "white",
    },

    "& > *": {
      borderRadius: "10px",
    },

    "& .MuiTouchRipple-root": {
      color: "#909fad",
    },
  },

  "@media (max-width: 720px)": {
    tab: {
      minWidth: 55,
    },
  },
});

export default HeaderNavStyles;
