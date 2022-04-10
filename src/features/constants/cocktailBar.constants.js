/*
 *
 * Cocktail Bar constants
 *
 */

import { generateActionTypes } from "../../utils/generic-saga";

const root = "app/CoocktailBar/";
const SET_USER_DATA = generateActionTypes(root, "SET_USER_DATA"); // set user data into the store
const FETCH_COCKTAILS = generateActionTypes(root, "FETCH_COCKTAILS"); // Fetch cocktail list
const FETCH_INGREDIENTS = generateActionTypes(root, "FETCH_INGREDIENTS"); // Fetch ingredients list
const FETCH_GLASSES = generateActionTypes(root, "FETCH_GLASSES"); // Fetch glasses list
const FETCH_CATEGORIES = generateActionTypes(root, "FETCH_CATEGORIES"); // Fetch categories list
const FETCH_ALCOHOLIC_TYPES = generateActionTypes(
  root,
  "FETCH_ALCOHOLIC_TYPES"
); // Fetch alcoholic types list

export default {
  SET_USER_DATA,
  FETCH_COCKTAILS,
  FETCH_INGREDIENTS,
  FETCH_GLASSES,
  FETCH_CATEGORIES,
  FETCH_ALCOHOLIC_TYPES,
};
