import { Box, Grid } from "@mui/material";
import technologiesData from "../../../assets/static/technologies";
import TechnologyCard from "../../Atoms/TechnologiesCard/TechnologyCard";
import techCardsStyles from "./TechnologiesCards.styles";

export default function TechnologiesCards() {
  const classes = techCardsStyles();

  return (
    <Box className={classes.techCardsWrapper}>
      {technologiesData &&
        technologiesData.map((technology, index) => {
          return <TechnologyCard {...technology} key={index} />;
        })}
    </Box>
  );
}
