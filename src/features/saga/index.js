/**
 * Combine  Sagas  watcher
 */
import { all } from "redux-saga/effects";
import {
  setUserDataWatcher,
  setCocktailFiltersDataWatcher,
  fetchCocktailsWatcher,
  setFiltredCocktailListWatcher,
  fetchIngredientsWatcher,
  fetchGlassesWatcher,
  fetchCategoriesWatcher,
  fetchAlcoholicTypesWatcher,
} from "./cocktailBar.saga";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    setUserDataWatcher(),
    setCocktailFiltersDataWatcher(),
    fetchCocktailsWatcher(),
    setFiltredCocktailListWatcher(),
    fetchIngredientsWatcher(),
    fetchGlassesWatcher(),
    fetchCategoriesWatcher(),
    fetchAlcoholicTypesWatcher(),
    fetchCategoriesWatcher(),
  ]);
}
