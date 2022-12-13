import { Box, Paper } from "@mui/material";
import techCardStyles from "./TechnologyCard.styles";

export default function TechnologyCard(props) {
  const classes = techCardStyles();

  const { title, icon, elevation } = props;
  return (
    <Paper elevation={elevation} className={classes.techCardWrapper}>
      <Box className={classes.techCardIcon}>{icon}</Box>
      <Box className={classes.techCardTitle}>{title}</Box>
    </Paper>
  );
}
