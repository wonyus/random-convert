import { SET_USER } from '../types'

export const setUser = (data: any) => {
	return { type: SET_USER, payload: data }
}
