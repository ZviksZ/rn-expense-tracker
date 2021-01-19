import { Action }                            from 'redux'
import { LoadingStatus }                     from '../../../types'
import {ExpenseInterface} from "./state";

export enum ExpensesActionsType {
	SET_LOADING_STATE = 'expense/SET_LOADING_STATE',
	SET_EXPENSES = 'expense/SET_EXPENSES',
	ADD_EXPENSE = 'expense/ADD_EXPENSE',
	REMOVE_EXPENSE = 'expense/REMOVE_EXPENSE',
	UPDATE_EXPENSE = 'expense/UPDATE_EXPENSE',
	EDIT_EXPENSE = 'expense/EDIT_EXPENSE',
}

export interface SetExpensesActionInterface extends Action<ExpensesActionsType> {
	type: ExpensesActionsType.SET_EXPENSES
	payload: ExpenseInterface[] | null
}
export interface SetExpensesLoadingActionInterface extends Action<ExpensesActionsType> {
	type: ExpensesActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}
export interface AddExpenseActionInterface extends Action<ExpensesActionsType> {
	type: ExpensesActionsType.ADD_EXPENSE
	payload: ExpenseInterface
}
export interface UpdateExpenseActionInterface extends Action<ExpensesActionsType> {
	type: ExpensesActionsType.UPDATE_EXPENSE
	id: string
	data: ExpenseInterface
}
export interface EditExpenseActionInterface extends Action<ExpensesActionsType> {
	type: ExpensesActionsType.EDIT_EXPENSE
	payload: ExpenseInterface | null
}
export interface RemoveExpenseActionInterface extends Action<ExpensesActionsType> {
	type: ExpensesActionsType.REMOVE_EXPENSE
	payload: string
}
