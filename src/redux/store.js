import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
// import userDetails from './user';
import {AppStateReducer} from './AppState';
// import list from './list/reducer.js';
// import serviceCenter from './serviceCenter/reducer.js';
// import labels from './language/reducer.js';
const appReducer = combineReducers({
  // userDetails,
  // list,
  // serviceCenter,
  // labels,
  appStateReducer: AppStateReducer,
});

export const USER_LOGOUT = 'USER_LOGOUT';

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk)),
);