import { atomWithStore } from 'jotai/redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { encoderReducer } from './reducers'

const rootReducer = combineReducers({ encoder: encoderReducer })

const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof store.getState>

export default atomWithStore(store)
