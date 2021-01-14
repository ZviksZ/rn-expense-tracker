import { LoadingStatus } from '../../../types'


export interface GlobalStateInterface {
	user: any | null
	globalMessage: string | null
	LoadingStatus: LoadingStatus
}
