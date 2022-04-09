/**
 *
 * Root reducer
 *
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../utils/history';
import cocktailBarReducer from './cocktailBar.reducer';

const createReducer = (injectedReducers = {}) => {
	const rootReducer = combineReducers({
		cocktailBar: cocktailBarReducer,
		router: connectRouter(history),
		...injectedReducers
	});

	return rootReducer;
};
export default createReducer;
