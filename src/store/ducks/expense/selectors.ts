import { RootStateInterface } from '../../store'
import { createSelector } from 'reselect'

import { LoadingStatus }        from '../../types'
import {ExpensesStateInterface} from "../expense/contracts/state";

export const selectExpenses = (state: RootStateInterface): ExpensesStateInterface => state.expenses

export const selectExpensesLoadingStatus = (state: RootStateInterface): LoadingStatus => selectExpenses(state).LoadingStatus

export const selectIsExpensesLoading = (state: RootStateInterface): boolean => selectExpensesLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsExpensesLoaded = (state: RootStateInterface): boolean => selectExpensesLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsExpensesLoadingSuccess = (state: RootStateInterface): boolean => selectExpensesLoadingStatus(state) === LoadingStatus.SUCCESS
export const selectIsExpensesLoadingError = (state: RootStateInterface): boolean => selectExpensesLoadingStatus(state) === LoadingStatus.ERROR
export const selectIsExpensesLoadingNever = (state: RootStateInterface): boolean => selectExpensesLoadingStatus(state) === LoadingStatus.NEVER
