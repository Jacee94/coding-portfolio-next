import styled from '@mui/styled-engine';
import { Chip } from '@mui/material';

export const BaseChip = styled(Chip)(({ theme }) => ({
  height: 52,
  borderRadius: 26
}));

export default {
  BaseChip,
}