import { createUseStyles } from "react-jss";

const headerAvatarStyles = createUseStyles({
  headerAvatar: {
    height: 60,
    width: 60,
  },

  '@media (max-width: 1200px)': {
    headerAvatar: {
      height: 45,
      width: 45
    }
  }
});

export default headerAvatarStyles;
