import {LoadingStatus}    from '../../types'
import {
	AddExpenseActionInterface, EditExpenseActionInterface,
	ExpensesActionsType,
	RemoveExpenseActionInterface,
	SetExpensesActionInterface,
	SetExpensesLoadingActionInterface,
	UpdateExpenseActionInterface
} from "../expense/contracts/actionTypes";
import {ExpenseInterface} from "../expense/contracts/state";

export const setExpenses = (payload: ExpenseInterface[] | null): SetExpensesActionInterface => ({
	type: ExpensesActionsType.SET_EXPENSES,
	payload,
})
export const setExpensesLoading = (payload: LoadingStatus): SetExpensesLoadingActionInterface => ({
	type: ExpensesActionsType.SET_LOADING_STATE,
	payload,
})
export const addExpense = (payload: ExpenseInterface): AddExpenseActionInterface => ({
	type: ExpensesActionsType.ADD_EXPENSE,
	payload,
})
export const updateExpense = (id: string, data: ExpenseInterface): UpdateExpenseActionInterface => ({
	type: ExpensesActionsType.UPDATE_EXPENSE,
	id,
	data
})
export const editExpense = (payload: ExpenseInterface | null): EditExpenseActionInterface => ({
	type: ExpensesActionsType.EDIT_EXPENSE,
	payload,
})
export const removeExpense = (payload: string): RemoveExpenseActionInterface => ({
	type: ExpensesActionsType.REMOVE_EXPENSE,
	payload,
})


export type ExpensesActions = EditExpenseActionInterface | UpdateExpenseActionInterface | RemoveExpenseActionInterface | SetExpensesLoadingActionInterface | SetExpensesActionInterface | AddExpenseActionInterface
