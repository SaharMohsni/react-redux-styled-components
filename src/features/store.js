/**
 * Store
 */
 import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
 import createSagaMiddleware from 'redux-saga';
 import { createInjectorsEnhancer } from 'redux-injectors';
 import { routerMiddleware } from 'connected-react-router';
 import createReducer from './reducers/rootReducer';
 import rootSaga from './saga';
 import history from '../utils/history';
 
 export default function configureAppStore(initialState = {}) {
     const reduxSagaMonitorOptions = {};
     const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
 
     const { run: runSaga } = sagaMiddleware;
 
     const middleWares = [ sagaMiddleware, routerMiddleware(history) ];
 
     const enhancers = [
         createInjectorsEnhancer({
             createReducer,
             runSaga
         })
     ];
 
     const store = configureStore({
         reducer: createReducer(),
         middleware: [ ...getDefaultMiddleware(), ...middleWares ],
         preloadedState: initialState,
         devTools:true,
         enhancers
     });
 
     sagaMiddleware.run(rootSaga);
     return store;
 }
 