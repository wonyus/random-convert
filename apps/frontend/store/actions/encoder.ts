import { SET_JWT } from '../types'

export const setJWTAction = (data: any) => {
	return { type: SET_JWT, payload: data }
}
