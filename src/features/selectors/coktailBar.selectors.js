/**
 * Cocktail Bar selectors
 */
import { createSelector } from "reselect";

export const selectUserData = createSelector(
  (state) => state.cocktailBar,
  (cocktailBar) => cocktailBar.data.userData
);
export const selectCocktailsList = createSelector(
  (state) => state.cocktailBar,
  (cocktailBar) => cocktailBar.data.cocktailsList
);
