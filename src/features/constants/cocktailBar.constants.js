/*
 *
 * Cocktail Bar constants
 *
 */

import { generateActionTypes } from "../../utils/generic-saga";

const root = "app/CoocktailBar/";
const SET_USER_DATA = generateActionTypes(root, "SET_USER_DATA"); // set user data into the store
const SET_COCKTAIL_FILTERS_DATA = generateActionTypes(
  root,
  "SET_COCKTAIL_FILTERS_DATA"
); // set cocktail filters data into the store
const FETCH_COCKTAILS = generateActionTypes(root, "FETCH_COCKTAILS"); // Fetch cocktail list
const SET_FILTRED_COCKTAIL_LIST = generateActionTypes(
  root,
  "SET_FILTRED_COCKTAIL_LIST"
); // Set cocktail list after filter
const FETCH_INGREDIENTS = generateActionTypes(root, "FETCH_INGREDIENTS"); // Fetch ingredients list
const FETCH_GLASSES = generateActionTypes(root, "FETCH_GLASSES"); // Fetch glasses list
const FETCH_CATEGORIES = generateActionTypes(root, "FETCH_CATEGORIES"); // Fetch categories list
const FETCH_ALCOHOLIC_TYPES = generateActionTypes(
  root,
  "FETCH_ALCOHOLIC_TYPES"
); // Fetch alcoholic types list

export default {
  SET_USER_DATA,
  SET_COCKTAIL_FILTERS_DATA,
  FETCH_COCKTAILS,
  SET_FILTRED_COCKTAIL_LIST,
  FETCH_INGREDIENTS,
  FETCH_GLASSES,
  FETCH_CATEGORIES,
  FETCH_ALCOHOLIC_TYPES,
};
