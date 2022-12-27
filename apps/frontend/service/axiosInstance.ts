import axios from 'axios'
import { setupInterceptorsTo } from './Interceptors'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'
import { persistentStorage } from '../utils/useStorage/persistentStorage'

const baseURL = process.env.NEXT_PUBLIC_APP_ENDPOINT
const origin = process.env.NEXT_PUBLIC_APP_ORIGIN

let authTokens = persistentStorage.getItem('authTokens')

const axiosInstance = setupInterceptorsTo(
	axios.create({
		baseURL,
		headers: {
			Authorization: `Bearer ${authTokens?.accessToken}`,
			'Access-Control-Allow-Origin': `${origin}`,
			'Access-Control-Allow-Credentials': 'true',
			'Access-Control-Allow-Headers': 'content-type',
			'Content-Type': 'application/json',
		},
	}),
)

axiosInstance.interceptors.request.use(async (request) => {
	if (!authTokens) {
		authTokens = persistentStorage.getItem('authTokens')
		request.headers!.Authorization = `Bearer ${authTokens?.accessToken}`
	} else {
		request.headers!.Authorization = `Bearer ${authTokens?.accessToken}`
	}

	const user: any = jwt_decode(authTokens.accessToken)
	const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

	if (!isExpired) return request
	console.log('getsession')
	const session = await axios.get('api/auth/session')

	persistentStorage.setItem('authTokens', session.data.tokens)
	request.headers!.Authorization = `Bearer ${session.data.tokens.accessToken}`
	return request
})

export default axiosInstance
