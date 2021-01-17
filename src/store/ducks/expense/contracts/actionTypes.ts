import { Action }                            from 'redux'
import { LoadingStatus }                     from '../../../types'
import {ExpenseInterface} from "./state";

export enum ExpensesActionsType {
	SET_LOADING_STATE = 'expense/SET_LOADING_STATE',
	SET_EXPENSES = 'expense/SET_EXPENSES',
}

export interface SetExpensesActionInterface extends Action<ExpensesActionsType> {
	type: ExpensesActionsType.SET_EXPENSES
	payload: ExpenseInterface[] | null
}
export interface SetExpensesLoadingActionInterface extends Action<ExpensesActionsType> {
	type: ExpensesActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}
