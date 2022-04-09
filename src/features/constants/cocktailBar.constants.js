/*
 *
 * Cocktail Bar constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga';

const root = 'app/CoocktailBar/';
const FETCH_COCKTAILS = generateActionTypes(root, 'FETCH_COCKTAILS');
const FETCH_INGREDIENTS = generateActionTypes(root, 'FETCH_INGREDIENTS');
const FETCH_GLASSES = generateActionTypes(root, 'FETCH_GLASSES');
const FETCH_CATEGORIES = generateActionTypes(root, 'FETCH_CATEGORIES');
const FETCH_ALCOHOLIC_TYPES = generateActionTypes(root, 'FETCH_ALCOHOLIC_TYPES');

export default {
	FETCH_COCKTAILS,
	FETCH_INGREDIENTS,
	FETCH_GLASSES,
	FETCH_CATEGORIES,
	FETCH_ALCOHOLIC_TYPES
};
