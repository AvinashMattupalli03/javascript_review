import React, { useState } from "react";
import { Box, TextField, Button, Typography, FormControl } from "@mui/material";
import { BUTTON_LABEL, NAMES, PASSWORD_RULES, TITLE } from "../utils/constants";
import { StyledBox } from "./styles";

const PasswordValidation = () => {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{3,10}$/;
    return regex.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePassword(password)) {
      alert("Valid Password");
      setError("");
    } else {
      setError("Invalid Password");
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <StyledBox>
      <FormControl component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          {TITLE}
        </Typography>
        <TextField
          type="text"
          id="pass"
          label="Password"
          variant="outlined"
          onChange={handlePassword}
        />
        <Typography color="red">{error}</Typography>
        <Typography>{PASSWORD_RULES}</Typography>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {BUTTON_LABEL}
        </Button>
      </FormControl>
      <Box m={4}>
        {NAMES.map((name, index) => (
          <Typography key={index} variant="body1">
            {name}
          </Typography>
        ))}
      </Box>
    </StyledBox>
  );
};

export default PasswordValidation;
