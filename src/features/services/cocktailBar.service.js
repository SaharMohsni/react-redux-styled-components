import axios from "axios";
import { requestHeader } from "../../utils/requestHeader";
import URL from "../constants/service.constants";

export const fetchCocktailsList = async () => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.cocktailBar.fetchCocktailsList,
    requestHeader({})
  );
  return result.data;
};

export const fetchIngredientsList = async () => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.cocktailBar.fetchIngredientsList,
    requestHeader({})
  );
  return result.data;
};

export const fetchGlassesList = async () => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.cocktailBar.fetchGlassesList,
    requestHeader({})
  );
  return result.data;
};

export const fetchCategoriesList = async () => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.cocktailBar.fetchCategoriesList,
    requestHeader({})
  );
  return result.data;
};

export const fetchAlcoholicTypesList = async () => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.cocktailBar.fetchAlcoholicTypesList,
    requestHeader({})
  );
  return result.data;
};
