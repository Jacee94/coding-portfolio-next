import { styled } from "@mui/material/styles";
import { Card, TextField, Box, Button } from "@mui/material";

const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "calc(100vh - 74px)",
}));

const CardWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
}));

const ContactCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 20,
  width: "fit-content",
}));

const FormInfo = styled(Box)(({ theme }) => ({
  fontSize: 20,
  padding: 30,
}));

const ContactForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledTextfield = styled(TextField)(({ theme }) => ({
  margin: 20,
  marginBottom: 0,
  width: 280
}));

const SubmitBtn = styled(Button)(({ theme }) => ({
  margin: 20,
}));

export {
  Content,
  StyledTextfield,
  CardWrapper,
  ContactCard,
  FormInfo,
  ContactForm,
  SubmitBtn,
};
