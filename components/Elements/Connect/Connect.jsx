import { Box, Typography } from "@mui/material";

export default function Connect(props) {
  const { refProp } = props;

  return (
    <Box ref={refProp}>
      <Typography>Connect</Typography>
    </Box>
  );
}
