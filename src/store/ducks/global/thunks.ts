import {AppActions, AppState} from "../../store";
import {Dispatch}             from "redux";
import {FirebaseService}      from "../../../services/api/firebaseService";
import {setUser} from "./actionCreators";

export type AuthData = {
   login: string
   password: string
}

export const registerRequest = (data: AuthData) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
   try {
      const response = await FirebaseService.register(data.login, data.password)

      dispatch(setUser(response))
   } catch (e) {

   }
}
export const loginRequest = (data: AuthData) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
   try {
      const response = await FirebaseService.login(data.login, data.password)

      dispatch(setUser(response))
   } catch (e) {

   }
}
