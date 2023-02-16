import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SectionTitleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  color: "white",
  textShadow: "3px 3px 3px black",

  "& > *": {
    fontFamily: "Source Sans Pro",
  },
}));

export { SectionTitleWrapper };
