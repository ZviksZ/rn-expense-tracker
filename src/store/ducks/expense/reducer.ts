import produce, {Draft}         from 'immer'
import {LoadingStatus}          from '../../types'
import {ExpensesActionsType}    from "../expense/contracts/actionTypes";
import {ExpensesStateInterface} from "../expense/contracts/state";
import {ExpensesActions}        from "./actionCreators";

const initialExpensesState: ExpensesStateInterface = {
	expenses: null,
	expenseDetail: null,
	LoadingStatus: LoadingStatus.NEVER
}
export const expenseReducer = produce((draft: Draft<ExpensesStateInterface>, action: ExpensesActions) => {
	switch (action.type) {
		case ExpensesActionsType.SET_EXPENSES:
			draft.expenses = action.payload
			draft.LoadingStatus = LoadingStatus.SUCCESS
			break
		case ExpensesActionsType.SET_LOADING_STATE:
			draft.LoadingStatus = action.payload
			break
		case ExpensesActionsType.ADD_EXPENSE:
			draft.expenses = [action.payload, ...draft.expenses]
			break
		case ExpensesActionsType.REMOVE_EXPENSE:
			draft.expenses = draft.expenses && draft.expenses.filter(expense => expense.id !== action.payload)
			break
		case ExpensesActionsType.UPDATE_EXPENSE:
			draft.expenses = draft.expenses && draft.expenses.map(expense => {
				if (expense.id == action.id) {
					return {...expense, ...action.data}
				} else {
					return expense
				}
			})
			break
		case ExpensesActionsType.EDIT_EXPENSE:
			draft.expenseDetail = action.payload
			break
		default:
			break
	}
}, initialExpensesState)
