import {AppActions, AppState} from "../../store";
import {Dispatch}             from "redux";
import {FirebaseService}      from "../../../services/api/firebaseService";
import {setUser}              from "./actionCreators";
import {Alert}                from "react-native";

export type AuthData = {
   login: string
   password: string
}

export const registerRequest = (data: AuthData) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
   try {
      const response = await FirebaseService.register(data.login, data.password)

      dispatch(setUser(response))

      Alert.alert('Регистрация прошла успешно')
   } catch (e) {
      Alert.alert('Ошибка при регистрации, попробуйте еще раз')
   }
}
export const loginRequest = (data: AuthData) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
   try {
      const response = await FirebaseService.login(data.login, data.password)

      dispatch(setUser(response))

      Alert.alert('Вход выполнен успешно')
   } catch (e) {
      Alert.alert('Ошибка при входе, попробуйте еще раз')
   }
}
