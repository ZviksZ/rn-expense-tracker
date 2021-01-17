import {
   GlobalActionsType,
   SetLoadingActionInterface,
   SetUserActionInterface,
}                          from './contracts/actionTypes'
import { LoadingStatus }   from '../../types'
import {UserDataInterface} from "./contracts/state";

export const setUser = (payload: UserDataInterface | null): SetUserActionInterface => ({
   type: GlobalActionsType.SET_USER,
   payload,
})
export const setGlobalLoading = (payload: LoadingStatus): SetLoadingActionInterface => ({
   type: GlobalActionsType.SET_LOADING_STATE,
   payload,
})


export type GlobalActions =
   | SetLoadingActionInterface
   | SetUserActionInterface
