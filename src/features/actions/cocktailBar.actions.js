/**
 *
 * Cocktail Bar action
 *
 */
import { action } from "typesafe-actions";
import ActionTypes from "../constants/cocktailBar.constants";

// user data
export const setUserData = (payload) => {
  return action(ActionTypes.SET_USER_DATA.request, payload);
};

//Cocktail filters
export const setCocktailFiltersData = (payload) => {
  return action(ActionTypes.SET_COCKTAIL_FILTERS_DATA.request, payload);
};

// Fetched Cocktails
export const fetchCocktails = () => {
  return action(ActionTypes.FETCH_COCKTAILS.request);
};

// Fetched Cocktails ingredients
export const fetchIngredients = () => {
  return action(ActionTypes.FETCH_INGREDIENTS.request);
};

// Fetched Cocktails glasses
export const fetchGlasses = () => {
  return action(ActionTypes.FETCH_GLASSES.request);
};

// Fetched Cocktails categories
export const fetchCategories = () => {
  return action(ActionTypes.FETCH_CATEGORIES.request);
};

// Fetched Cocktails alcoholic types
export const fetchAlcoholicTypes = () => {
  return action(ActionTypes.FETCH_ALCOHOLIC_TYPES.request);
};
