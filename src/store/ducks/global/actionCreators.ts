import {
	GlobalActionsType,
	SetGlobalMessageActionInterface,
	SetLoadingActionInterface,
	SetUserActionInterface,
} from './contracts/actionTypes'
import { LoadingStatus } from '../../types'

export const setUser = (payload: any | null): SetUserActionInterface => ({
	type: GlobalActionsType.SET_USER,
	payload,
})
export const setGlobalMessage = (payload: string | null): SetGlobalMessageActionInterface => ({
	type: GlobalActionsType.SET_GLOBAL_MESSAGE,
	payload,
})
export const setGlobalLoading = (payload: LoadingStatus): SetLoadingActionInterface => ({
	type: GlobalActionsType.SET_LOADING_STATE,
	payload,
})


export type GlobalActions =
	| SetLoadingActionInterface
	| SetGlobalMessageActionInterface
	| SetUserActionInterface
