import { LoadingStatus } from '../../../types'


export interface ExpenseInterface {
	id?: string
	amount: number
	date?: string
	type?: string
	userId: string
	text?: string
}

export interface ExpensesStateInterface {
	expenses: ExpenseInterface[] | null
	expenseDetail: ExpenseInterface | null
	LoadingStatus: LoadingStatus
}
