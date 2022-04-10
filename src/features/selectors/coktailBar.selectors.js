/**
 * Cocktail Bar selectors
 */
import { createSelector } from "reselect";

export const selectUserData = createSelector(
  (state) => state.cocktailBar,
  (cocktailBar) => cocktailBar.data.userData
);
export const selectCocktailFiltersData = createSelector(
  (state) => state.cocktailBar,
  (cocktailBar) => cocktailBar.data.cocktailFiltersData
);
export const selectCocktailsList = createSelector(
  (state) => state.cocktailBar,
  (cocktailBar) => cocktailBar.data.cocktailsList
);
export const selectIngredientsList = createSelector(
  (state) => state.cocktailBar,
  (cocktailBar) => cocktailBar.data.ingredientsList
);
export const selectGlassesList = createSelector(
  (state) => state.cocktailBar,
  (cocktailBar) => cocktailBar.data.glassesList
);
export const selectCategoriesList = createSelector(
  (state) => state.cocktailBar,
  (cocktailBar) => cocktailBar.data.categoriesList
);
export const selectAlcoholicTypesList = createSelector(
  (state) => state.cocktailBar,
  (cocktailBar) => cocktailBar.data.alcoholicTypesList
);
