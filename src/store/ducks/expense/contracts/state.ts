import { LoadingStatus } from '../../../types'


export interface ExpenseInterface {
	id: string
	amount: number
	date: string
	type: string
}

export interface ExpensesStateInterface {
	expenses: ExpenseInterface[] | null
	LoadingStatus: LoadingStatus
}
