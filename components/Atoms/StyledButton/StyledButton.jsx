import { Button } from "@mui/material";
import { buttonStyles } from "./StyledButton.styles";

export default function StyledButton(props) {
  const { children, ...rest } = props;
  const classes = buttonStyles();

  return (
    <Button {...rest} className={classes.styledButton}>
      {children}
    </Button>
  );
}
