import { LoadingStatus } from '../../../types'


export interface UserDataInterface {
	kind: string
	idToken: string
	email: string
	refreshToken: string
	expiresIn: string
	localId: string
}

export interface GlobalStateInterface {
	user: UserDataInterface | null
	globalMessage: string | null
	LoadingStatus: LoadingStatus
}
