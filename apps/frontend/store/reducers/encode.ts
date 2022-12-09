import { AnyAction } from '../types'
import { SET_JWT } from '../types'
import { GET_JWT } from '../types'
import { atom } from 'jotai'
import { RootState } from '../index'

const initialState = { count: 0, data: 0 }

const encoderReducer = (state = initialState, action: AnyAction<string, any>) => {
	switch (action.type) {
		case SET_JWT: {
			return { ...state, count: state.count + 1 }
		}
		default: {
			return state
		}
	}
}

export default encoderReducer
