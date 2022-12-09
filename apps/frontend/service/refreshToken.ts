import axios from 'axios'
import { persistentStorage } from '../utils/useStorage/persistentStorage'
import { setupInterceptorsTo } from './Interceptors'

const baseURL = 'http://127.0.0.1:8000/api/v1'

export const genAxiosRefreshToken = () => {
	let authTokens = persistentStorage.getItem('authTokens')
	const refreshInstance = setupInterceptorsTo(
		axios.create({
			baseURL,
			headers: {
				Authorization: `Bearer ${authTokens?.refreshToken}`,
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true',
				'Access-Control-Allow-Headers': 'content-type',
			},
		}),
	)
	return refreshInstance
}
