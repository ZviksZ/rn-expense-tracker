import {AppActions, AppState}                                                      from "../../store";
import {Dispatch}                                                                  from "redux";
import {FirebaseService}                                                           from "../../../services/api/firebaseService";
import {Alert}                                                                     from "react-native";
import {LoadingStatus}                                                             from "../../types";
import {addExpense, removeExpense, setExpenses, setExpensesLoading, updateExpense} from "./actionCreators";
import {ExpenseAddUpdateInterface}                                                 from "../../../services/api/types";


export const fetchExpensesRequest = (userId: string) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
   try {
      dispatch(setExpensesLoading(LoadingStatus.LOADING))

      const data = await FirebaseService.fetchExpenses(userId)
      const expenses = Object.keys(data).map(key => ({...data[key], id: key}))

      dispatch(setExpenses(expenses))
   } catch (e) {
      Alert.alert('Ошибка при загрузке данных')
   }
}


export const addExpenseRequest = (data: ExpenseAddUpdateInterface) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
   try {
      const name = await FirebaseService.addExpense(data)

      dispatch(addExpense({...data, id: name}))
   } catch (e) {
      Alert.alert('Ошибка при создании')
   }
}


export const removeExpenseRequest = (id: string) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
   try {
      await FirebaseService.removeExpense(id)

      dispatch(removeExpense(id))
   } catch (e) {
      Alert.alert('Ошибка при удалении')
   }
}

export const updateExpenseRequest = (id: string, data: ExpenseAddUpdateInterface) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
   try {
      await FirebaseService.updateExpense(id, data)

      dispatch(updateExpense(id, data))
   } catch (e) {
      Alert.alert('Ошибка при обновлении')
   }
}
