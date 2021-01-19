import { RootStateInterface } from '../../store'
import { createSelector } from 'reselect'

import { LoadingStatus }        from '../../types'
import {ExpenseInterface, ExpensesStateInterface} from "../expense/contracts/state";

export const selectExpenses = (state: RootStateInterface): ExpensesStateInterface => state.expenses
export const selectExpensesData = (state: RootStateInterface): ExpenseInterface[] | null => state.expenses.expenses

export const selectExpensesLoadingStatus = (state: RootStateInterface): LoadingStatus => selectExpenses(state).LoadingStatus

export const selectIsExpensesLoading = (state: RootStateInterface): boolean => selectExpensesLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsExpensesLoaded = (state: RootStateInterface): boolean => selectExpensesLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsExpensesLoadingSuccess = (state: RootStateInterface): boolean => selectExpensesLoadingStatus(state) === LoadingStatus.SUCCESS
export const selectIsExpensesLoadingError = (state: RootStateInterface): boolean => selectExpensesLoadingStatus(state) === LoadingStatus.ERROR
export const selectIsExpensesLoadingNever = (state: RootStateInterface): boolean => selectExpensesLoadingStatus(state) === LoadingStatus.NEVER


export const selectExpensesSummary = createSelector(selectExpensesData, (expenses): {income: number, expense: number} => {
   const data = {
      income: 0,
      expense: 0
   }

   if (expenses && expenses?.length) {
      for (let i = 0; i < expenses.length; i++) {
         if (expenses[i]) {
            switch (expenses[i].type) {
               case 'income':
                  data.income += expenses[i].amount
                  break
               case 'expense':
                  data.expense += expenses[i].amount
                  break
            }
         }
      }
   }

   return data
})
