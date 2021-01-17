import {AppActions, AppState}      from "../../store";
import {Dispatch}                  from "redux";
import {FirebaseService}           from "../../../services/api/firebaseService";
import {setGlobalLoading, setUser} from "./actionCreators";
import {Alert}                     from "react-native";
import {LoadingStatus}             from "../../types";

export type AuthData = {
   login: string
   password: string
}

export const registerRequest = (data: AuthData) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
   try {
      dispatch(setGlobalLoading(LoadingStatus.LOADING))
      const response = await FirebaseService.register(data.login, data.password)
      dispatch(setUser(response))
      Alert.alert('Регистрация прошла успешно')
   } catch (e) {
      Alert.alert('Ошибка при регистрации, попробуйте еще раз')
   }
}
export const loginRequest = (data: AuthData) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
   try {
      dispatch(setGlobalLoading(LoadingStatus.LOADING))
      const response = await FirebaseService.login(data.login, data.password)

      dispatch(setUser(response))

      //Alert.alert('Вход выполнен успешно')
   } catch (e) {
      Alert.alert('Ошибка при входе, попробуйте еще раз')
   }
}
