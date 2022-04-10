import { exist } from "../../utils/array.helper";
import { isMatch } from "../../utils/string.helper";

// Get cocktails ingridents and create new structure of it
export const createCocktailIngridentsNewStructure = (cocktail) => {
  let ingridentsArray = [];
  Object.keys(cocktail).filter((el) => {
    if (isMatch(el, "strIngredient") && cocktail[el] !== null) {
      ingridentsArray.push(cocktail[el]);
    }
  });
  return ingridentsArray;
};

export const filterCocktails = (cocktailsList, cocktailFiltersData) => {
  return cocktailsList.filter((cocktail) => {
    let ingridentsArray = createCocktailIngridentsNewStructure(cocktail);
    return (
      exist(cocktailFiltersData.ingredients, ingridentsArray) &&
      isMatch(cocktail.strCategory, cocktailFiltersData.category) &&
      isMatch(cocktail.strAlcoholic, cocktailFiltersData.alcoholicType) &&
      isMatch(cocktail.strGlass, cocktailFiltersData.glass)
    );
  });
};
