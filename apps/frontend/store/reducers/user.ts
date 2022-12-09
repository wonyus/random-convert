import { AnyAction, SET_USER } from '../types'
import { GET_JWT } from '../types'
import { atom } from 'jotai'
import { RootState } from '../index'

const initialState = { name: '', email: '', loggedIn: false }

const userReducer = (state = initialState, action: AnyAction<string, any>) => {
	switch (action.type) {
		case SET_USER: {
			return { ...state, ...action.payload }
		}
		default: {
			return state
		}
	}
}

export default userReducer
