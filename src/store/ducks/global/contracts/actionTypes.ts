import { Action } from 'redux'
import { LoadingStatus } from '../../../types'

export enum GlobalActionsType {
	SET_USER = 'global/SET_USER',
	SET_GLOBAL_MESSAGE = 'global/SET_GLOBAL_MESSAGE',
	SET_LOADING_STATE = 'global/SET_LOADING_STATE',
}

export interface SetUserActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.SET_USER
	payload: any | null
}
export interface SetGlobalMessageActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.SET_GLOBAL_MESSAGE
	payload: string | null
}
export interface SetLoadingActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}
