import { isStringOrArrayEmpty } from "./isEmpty";

// Accept only letters
export const validateInputTypeText = (text) => {
    let regex = /[^a-zA-Z\s]*$/;
   return text.replace(regex, "");
}

// Accept only numbers
export const validateInputTypeNumber = (number) => {
    let regex = /[^0-9]/g;
   return number.replace(regex, "");

}

// Accept email format
export const validateInputTypeEmail = (email) => {
    let regex = /[^a-zA-Z0-9_/-@.]/g;
   return email.replace(regex, "");

}

// is valid email
export const isValidEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   return regex.test(email);

}