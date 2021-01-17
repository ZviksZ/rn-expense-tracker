import { Action }          from 'redux'
import { LoadingStatus }   from '../../../types'
import {UserDataInterface} from "./state";

export enum GlobalActionsType {
	SET_USER = 'global/SET_USER',
	SET_LOADING_STATE = 'global/SET_LOADING_STATE',
}

export interface SetUserActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.SET_USER
	payload: UserDataInterface | null
}
export interface SetLoadingActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}
