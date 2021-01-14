import { combineReducers } from 'redux'
import {globalReducer}     from "./ducks/global/reducer";

export const rootReducer = combineReducers({
   global: globalReducer
})
