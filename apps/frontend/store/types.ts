export interface AnyAction<T extends string, E> {
	type: T
	payload: E
}

export const SET_JWT = 'SET_JWT'

export const GET_JWT = 'GET_JWT'
