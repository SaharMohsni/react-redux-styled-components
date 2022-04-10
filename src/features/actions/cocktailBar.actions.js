/**
 *
 * Cocktail Bar action
 *
 */
import { action } from "typesafe-actions";
import ActionTypes from "../constants/cocktailBar.constants";

export const setUserData = (payload) => {
  return action(ActionTypes.SET_USER_DATA.request, payload);
};
export const fetchCocktails = () => {
  return action(ActionTypes.FETCH_COCKTAILS.request);
};
export const fetchIngredients = () => {
  return action(ActionTypes.FETCH_INGREDIENTS.request);
};

export const fetchglasses = () => {
  return action(ActionTypes.FETCH_GLASSES.request);
};
export const fetchCategories = () => {
  return action(ActionTypes.FETCH_CATEGORIES.request);
};

export const fetchAlcoholicTypes = () => {
  return action(ActionTypes.FETCH_ALCOHOLIC_TYPES.request);
};
