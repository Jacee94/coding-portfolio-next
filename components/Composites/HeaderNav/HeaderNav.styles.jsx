import { createUseStyles } from "react-jss";

const HeaderNavStyles = createUseStyles({
  tab: {
    color: "white",
    fontFamily: "Source Sans Pro",
    fontSize: 25,

    "&.Mui-selected": {
      color: "#9bb7d0",
    },

    "&:first-child": {
      borderRadius: "10px 0 0 10px",
    },

    "&:last-child": {
      borderRadius: "0 10px 10px 0",
    },
  },
});

export default HeaderNavStyles;
