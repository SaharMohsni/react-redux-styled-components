import React from "react";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./cocktailOwnerForm.scss";
import {
  isValidEmail,
  validateInputTypeEmail,
  validateInputTypeNumber,
  validateInputTypeText,
} from "../../../utils/input.validation.helper";
import {
  hasKey,
  isObjctEmpty,
  isStringOrArrayEmpty,
} from "../../../utils/isEmpty";

const CocktailOwnerForm = () => {
  const [inputs, setInputs] = React.useState({});

  // Handle Input change with Field validations
  const handleChange = (event, fieldType = "") => {
    const { name, value } = event.target;

    if (fieldType === "text") {
      setInputs((state) => ({
        ...state,
        [name]: validateInputTypeText(value),
      }));
    }
    if (fieldType === "number") {
      setInputs((state) => ({
        ...state,
        [name]: validateInputTypeNumber(value),
      }));
    }
    if (fieldType === "email") {
      setInputs((state) => ({
        ...state,
        [name]: validateInputTypeEmail(value),
      }));
    }
  };

  // Input has error
  const hasError = (field) => {
    return hasKey(inputs, field) && isStringOrArrayEmpty(inputs[field]);
  };

  // email has error
  const emailHasError =
    hasError("email") || (!hasError("email") && !isValidEmail(inputs["email"]));

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      className="cocktail-owner-form"
    >
      <FormControl error={hasError("cocktailName")} variant="standard">
        <InputLabel htmlFor="component-error">Cocktail Name</InputLabel>
        <Input
          type="text"
          id="component-error"
          name="cocktailName"
          label="Cocktail Name"
          variant="outlined"
          value={inputs["cocktailName"]}
          onChange={(event) => handleChange(event, "text")}
        />
        {hasError("cocktailName") && (
          <FormHelperText id="component-error-text">
            Required Field
          </FormHelperText>
        )}
      </FormControl>
      <FormControl error={hasError("firstName")} variant="standard">
        <InputLabel htmlFor="component-error">First Name</InputLabel>
        <Input
          type="text"
          id="component-error"
          name="firstName"
          variant="outlined"
          value={inputs["firstName"]}
          onChange={(event) => handleChange(event, "text")}
        />
        {hasError("firstName") && (
          <FormHelperText id="component-error-text">
            Required Field
          </FormHelperText>
        )}
      </FormControl>
      <FormControl error={hasError("lastName")} variant="standard">
        <InputLabel htmlFor="component-error">Last Name</InputLabel>
        <Input
          type="text"
          id="component-error"
          name="lastName"
          variant="outlined"
          value={inputs["lastName"]}
          onChange={(event) => handleChange(event, "text")}
        />
        {hasError("lastName") && (
          <FormHelperText id="component-error-text">
            Required Field
          </FormHelperText>
        )}
      </FormControl>
      <FormControl error={hasError("phoneNumber")} variant="standard">
        <InputLabel htmlFor="component-error">Phone Number</InputLabel>
        <Input
          id="component-error"
          name="phoneNumber"
          value={inputs["phoneNumber"]}
          onChange={(event) => handleChange(event, "number")}
        />
        {hasError("phoneNumber") && (
          <FormHelperText id="component-error-text">
            Required Field
          </FormHelperText>
        )}
      </FormControl>
      <FormControl error={emailHasError} variant="standard">
        <InputLabel htmlFor="component-error">Email</InputLabel>
        <Input
          id="component-error"
          name="email"
          variant="outlined"
          value={inputs["email"]}
          onChange={(event) => handleChange(event, "email")}
        />
        {emailHasError && (
          <FormHelperText id="component-error-text">
            {!isValidEmail(inputs["email"]) && !hasError("email")
              ? "Email not valid"
              : "Required Field"}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default CocktailOwnerForm;
