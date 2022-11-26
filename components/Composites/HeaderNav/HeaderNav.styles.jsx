import { createUseStyles } from "react-jss";

const HeaderNavStyles = createUseStyles({
  tab: {
    color: "#c7daeb",
    textShadow: "2px 2px 2px black",
    fontFamily: "Source Sans Pro",
    fontSize: 25,
    borderRadius: "10px",
    transition: ['background-color'],
    transitionDuration: 250,

    '&:not(.Mui-selected):hover': {
      backgroundColor: '#243b4d',
    },

    "&.Mui-selected": {
      color: "white",
    },

    "& > *": {
      borderRadius: "10px",
    },

    '& .MuiTouchRipple-root': {
      color: '#0c131a'
    }
  },
});

export default HeaderNavStyles;
