import { combineReducers } from 'redux'
import {globalReducer}     from "./ducks/global/reducer";
import {expenseReducer}    from "./ducks/expense/reducer";

export const rootReducer = combineReducers({
   global: globalReducer,
   expenses: expenseReducer
})
