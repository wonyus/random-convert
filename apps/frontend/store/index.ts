import { atomWithStore } from 'jotai-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { encoderReducer, userReducer } from './reducers'
import logger from 'redux-logger'
import { batchedSubscribe } from 'redux-batched-subscribe'
import _ from 'lodash'

const rootReducer = combineReducers({ encoder: encoderReducer, user: userReducer })
const debounceNotify = _.debounce((notify) => notify())
const preloadedState = {}
const store = configureStore({
	reducer: rootReducer,
	middleware: [logger],
	devTools: process.env.NODE_ENV !== 'production',
	preloadedState,
	enhancers: [batchedSubscribe(debounceNotify)],
})

export type RootState = ReturnType<typeof store.getState>

export default atomWithStore(store)
