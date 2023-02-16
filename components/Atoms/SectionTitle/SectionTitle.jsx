import React from "react";
import { SectionTitleWrapper } from "./SectionTitle.styles";
import { Typography } from "@mui/material";

export default function SectionTitle({ title }) {
  return (
    <SectionTitleWrapper>
      <Typography variant="h3">{title}</Typography>
    </SectionTitleWrapper>
  );
}
