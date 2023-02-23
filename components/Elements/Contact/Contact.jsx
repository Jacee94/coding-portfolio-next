import React, { useRef, useState } from "react";
import {
  Content,
  StyledTextfield,
  CardWrapper,
  FormInfo,
  ContactCard,
  ContactForm,
  SubmitBtn,
} from "./Contact.styles";
import { SectionTitle } from "../..";
import { Alert, Snackbar } from "@mui/material";

export default function Contact({ refProp }) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState({ error: false, helperText: " " });
  const nameRef = useRef();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({
    error: false,
    helperText: " ",
  });
  const emailRef = useRef();

  const [company, setCompany] = useState("");
  const [companyError, setCompanyError] = useState({
    error: false,
    helperText: " ",
  });
  const companyRef = useRef();

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState({
    error: false,
    helperText: " ",
  });
  const messageRef = useRef();

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const form = useRef();

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    switch (e.target.id) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "company":
        setCompany(value);
        validateString(value, companyRef.current, setCompanyError);
        break;
      case "message":
        setMessage(value);
        validateString(value, messageRef.current, setMessageError);
        break;
      default:
        return;
    }
  };

  const validateString = (stateVal, element, stateSetter) => {
    if (
      (!stateVal || typeof stateVal !== "string") &&
      element?.dataset?.id !== "company"
    ) {
      stateSetter({
        error: true,
        helperText: `Required field, please enter a valid ${element?.dataset?.id}`,
      });
      return false;
    }

    if (
      element?.dataset?.id === "email" &&
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stateVal)
    ) {
      stateSetter({
        error: true,
        helperText: "Please enter a valid email address",
      });
      return false;
    }

    if (element?.dataset?.id === "message" && stateVal.length > 300) {
      stateSetter({
        error: true,
        helperText: `Max message character count is 300 (currently ${stateVal.length})`,
      });
      return false;
    }

    if (stateVal?.length > 70) {
      stateSetter({
        error: true,
        helperText: `Max message character count is 70 (currently ${stateVal?.length})`,
      });
      return false;
    }

    stateSetter({ error: false, helperText: " " });
    return true;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const isNameValid = validateString(name, nameRef.current, setNameError);
    const isEmailValid = validateString(email, emailRef.current, setEmailError);
    const isCompanyValid = validateString(
      company,
      companyRef.current,
      setCompanyError
    );
    const isMessageValid = validateString(
      message,
      messageRef.current,
      setMessageError
    );

    if (!isNameValid || !isEmailValid || !isCompanyValid || !isMessageValid) {
      return;
    }

    const reqBody = {
      name,
      email,
      company,
      message,
    };

    setName("");
    setEmail("");
    setCompany("");
    setMessage("");

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      });
      const data = await response.json();

      if (response.ok) {
        return setSuccessMessage("Message Sent Successfully!");
      }
      setErrorMessage("Error occurred, please try again later");
    } catch (err) {
      console.error(err);
    }
  };

  const handleNameBlur = (e) => {
    validateString(name, nameRef.current, setNameError);
  };

  const handleBlurEmail = (e) => {
    validateString(email, emailRef.current, setEmailError);
  };

  const handleBlurMessage = (e) => {
    validateString(message, messageRef.current, setMessageError);
  };

  return (
    <Content ref={refProp}>
      <SectionTitle title="Contact" />

      <CardWrapper>
        <ContactCard>
          <FormInfo>Enter your details below to get in touch with me!</FormInfo>
          <ContactForm ref={form} onSubmit={sendEmail}>
            <Snackbar
              open={!!successMessage}
              autoHideDuration={4000}
              onClose={handleSnackClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert
                onClose={handleSnackClose}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                {successMessage}
              </Alert>
            </Snackbar>
            <Snackbar
              open={!!errorMessage}
              autoHideDuration={4000}
              onClose={handleSnackClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert
                onClose={handleSnackClose}
                severity="error"
                variant="filled"
                sx={{ width: "100%" }}
              >
                {errorMessage}
              </Alert>
            </Snackbar>
            <StyledTextfield
              id="name"
              label="Name"
              variant="outlined"
              onChange={handleInputChange}
              value={name}
              error={nameError?.error}
              helperText={nameError?.helperText}
              ref={nameRef}
              data-id="name"
              onBlur={handleNameBlur}
            />
            <StyledTextfield
              id="email"
              label="Email"
              variant="outlined"
              onChange={handleInputChange}
              value={email}
              error={emailError?.error}
              helperText={emailError?.helperText}
              ref={emailRef}
              data-id="email"
              onBlur={handleBlurEmail}
            />
            <StyledTextfield
              id="company"
              label="Company"
              variant="outlined"
              onChange={handleInputChange}
              value={company}
              error={companyError?.error}
              helperText={companyError?.helperText}
              ref={companyRef}
              data-id="company"
            />
            <StyledTextfield
              id="message"
              label="Message"
              variant="outlined"
              multiline
              minRows={4}
              maxRows={6}
              onChange={handleInputChange}
              value={message}
              error={messageError?.error}
              helperText={messageError?.helperText}
              ref={messageRef}
              data-id="message"
              onBlur={handleBlurMessage}
            />
            <SubmitBtn
              disabled={
                nameError?.error ||
                !name?.length ||
                emailError?.error ||
                !email?.length ||
                messageError?.error ||
                !message?.length
              }
              variant="contained"
              type="submit"
            >
              Send Message!
            </SubmitBtn>
          </ContactForm>
        </ContactCard>
      </CardWrapper>
    </Content>
  );
}
