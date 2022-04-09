/**
 * Cocktail Bar selectors
 */
import { createSelector } from 'reselect';

export const selectCocktailsList = createSelector((state) => state.cocktailBar, (cocktailBar) => cocktailBar.data.cocktailsList);

