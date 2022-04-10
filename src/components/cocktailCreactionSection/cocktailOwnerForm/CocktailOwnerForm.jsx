import React from "react";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { setUserData } from "../../../features/actions/cocktailBar.actions";

import "./cocktailOwnerForm.scss";
import {
  hasError,
  isValidEmail,
  validateInputTypeEmail,
  validateInputTypeNumber,
  validateInputTypeText,
} from "../../../utils/input.validation.helper";
import { hasKey, isObjctEmpty } from "../../../utils/isEmpty";

const CocktailOwnerForm = ({ setValidStep, userData }) => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = React.useState(userData);

  React.useEffect(() => {
    if (!isObjctEmpty(inputs)) {
      let inputsData = Object.values(inputs);
      if (
        inputsData.length === 5 &&
        !inputsData.includes("") &&
        !hasEmailErrors()
      ) {
        dispatch(setUserData(inputs));
        setValidStep(true);
      } else {
        setValidStep(false);
      }
    }
  }, [inputs]);

  // Handle Input change with Field validations
  const handleChange = (event, fieldType = "") => {
    console.log("here");
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
      console.log(
        "🚀 ~ file: CocktailOwnerForm.jsx ~ line 45 ~ handleChange ~ value",
        value
      );
      setInputs((state) => ({
        ...state,
        [name]: validateInputTypeEmail(value),
      }));
    }
  };

  const hasEmailErrors = () =>
    hasError(inputs, "email") ||
    (hasKey(inputs, "email") && !isValidEmail(inputs["email"]));

  // email has error
  const emailHasError = hasEmailErrors();

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
      <FormControl error={hasError(inputs, "cocktailName")} variant="standard">
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
        {hasError(inputs, "cocktailName") && (
          <FormHelperText id="component-error-text">
            Required Field
          </FormHelperText>
        )}
      </FormControl>
      <FormControl error={hasError(inputs, "firstName")} variant="standard">
        <InputLabel htmlFor="component-error">First Name</InputLabel>
        <Input
          type="text"
          id="component-error"
          name="firstName"
          variant="outlined"
          value={inputs["firstName"]}
          onChange={(event) => handleChange(event, "text")}
        />
        {hasError(inputs, "firstName") && (
          <FormHelperText id="component-error-text">
            Required Field
          </FormHelperText>
        )}
      </FormControl>
      <FormControl error={hasError(inputs, "lastName")} variant="standard">
        <InputLabel htmlFor="component-error">Last Name</InputLabel>
        <Input
          type="text"
          id="component-error"
          name="lastName"
          variant="outlined"
          value={inputs["lastName"]}
          onChange={(event) => handleChange(event, "text")}
        />
        {hasError(inputs, "lastName") && (
          <FormHelperText id="component-error-text">
            Required Field
          </FormHelperText>
        )}
      </FormControl>
      <FormControl error={hasError(inputs, "phoneNumber")} variant="standard">
        <InputLabel htmlFor="component-error">Phone Number</InputLabel>
        <Input
          id="component-error"
          name="phoneNumber"
          value={inputs["phoneNumber"]}
          onChange={(event) => handleChange(event, "number")}
        />
        {hasError(inputs, "phoneNumber") && (
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
            {!isValidEmail(inputs["email"]) && !hasError(inputs, "email")
              ? "Email not valid"
              : "Required Field"}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default CocktailOwnerForm;
