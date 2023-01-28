import { combineReducers } from "redux";

import exampleReducer from './example/reducer'

export default combineReducers({ // Combina vários reducers, no nosso caso só possui um
  exampleReducer,
});