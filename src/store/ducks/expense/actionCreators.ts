import {LoadingStatus}                                                                      from '../../types'
import {ExpensesActionsType, SetExpensesActionInterface, SetExpensesLoadingActionInterface} from "../expense/contracts/actionTypes";
import {ExpenseInterface}                                                                   from "../expense/contracts/state";

export const setExpenses = (payload: ExpenseInterface[] | null): SetExpensesActionInterface => ({
	type: ExpensesActionsType.SET_EXPENSES,
	payload,
})
export const setExpensesLoading = (payload: LoadingStatus): SetExpensesLoadingActionInterface => ({
	type: ExpensesActionsType.SET_LOADING_STATE,
	payload,
})


export type ExpensesActions = SetExpensesLoadingActionInterface | SetExpensesActionInterface
