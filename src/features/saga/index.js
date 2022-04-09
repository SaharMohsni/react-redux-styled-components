/**
 * Combine  Sagas  watcher
 */
import { all } from "redux-saga/effects";
import {
  fetchCocktailsWatcher,
  fetchIngredientsWatcher,
  fetchGlassesWatcher,
  fetchCategoriesWatcher,
  fetchAlcoholicTypesWatcher,
} from "./cocktailBar.saga";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    fetchCocktailsWatcher(),
    fetchIngredientsWatcher(),
    fetchGlassesWatcher(),
    fetchCategoriesWatcher(),
    fetchAlcoholicTypesWatcher(),
    fetchCategoriesWatcher(),
  ]);
}
