import React from "react";
import { SectionTitle } from "../..";
import { Link, Box } from "@mui/material";

export default function Resume() {
  return (
    <>
      <SectionTitle title="Resume" />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: 20,
        }}
      >
        <Link
          target="_blank"
          href="https://docs.google.com/document/d/1oHZu0wRhw7JcGp9fA4UVmeWLOE7KeZLrJkaoTUfl0j4/edit?usp=sharing"
        >
          My Resume
        </Link>
      </Box>
    </>
  );
}
