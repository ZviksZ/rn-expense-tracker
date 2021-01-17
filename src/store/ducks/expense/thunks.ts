import {AppActions, AppState}            from "../../store";
import {Dispatch}                        from "redux";
import {FirebaseService}                 from "../../../services/api/firebaseService";
import {Alert}                           from "react-native";
import {LoadingStatus}                   from "../../types";
import {setExpenses, setExpensesLoading} from "./actionCreators";
import {ExpenseAddUpdateInterface}       from "../../../services/api/types";


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


      //dispatch(setExpenses(expenses))
   } catch (e) {
      Alert.alert('Ошибка при создании')
   }
}
