import {AppActions, AppState}      from "../../store";
import {Dispatch}                  from "redux";
import {FirebaseService}           from "../../../services/api/firebaseService";
import {setGlobalLoading, setUser} from "./actionCreators";
import {Alert}                     from "react-native";
import {LoadingStatus}             from "../../types";
import {AsyncStorageService}       from "../../../services/helpers/asyncStorageService";

export type AuthData = {
   login: string
   password: string
}

export const registerRequest = (data: AuthData) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
   try {
      dispatch(setGlobalLoading(LoadingStatus.LOADING))
      const response = await FirebaseService.register(data.login, data.password)
      await AsyncStorageService.setItem('userData', response)
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
      await AsyncStorageService.setItem('userData', response)
      dispatch(setUser(response))
   } catch (e) {
      Alert.alert('Ошибка при входе, попробуйте еще раз')
   }
}
export const getStorageUserRequest = () => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
   try {
      const data = await AsyncStorageService.getItem('userData')
      if (data) {
         const user = await JSON.parse(data)

         dispatch(setUser(user))
      }

   } catch (e) {}
}
export const logoutRequest = () => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
   try {
      await  AsyncStorageService.removeItem('userData')
      dispatch(setUser(null))
   } catch (e) {}
}
