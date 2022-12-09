import axios from 'axios'
import { setupInterceptorsTo } from './Interceptors'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'
import { persistentStorage } from '../utils/useStorage/persistentStorage'
import { genAxiosRefreshToken } from './refreshToken'

const baseURL = 'http://127.0.0.1:8000/api/v1'

let authTokens = persistentStorage.getItem('authTokens')

const axiosInstance = setupInterceptorsTo(
	axios.create({
		baseURL,
		headers: {
			Authorization: `Bearer ${authTokens?.accessToken}`,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': 'true',
			'Access-Control-Allow-Headers': 'content-type',
		},
	}),
)

axiosInstance.interceptors.request.use(async (request) => {
	console.log(authTokens, 11)
	if (!authTokens) {
		console.log(22)
		authTokens = persistentStorage.getItem('authTokens')
		request.headers!.Authorization = `Bearer ${authTokens?.accessToken}`
	} else {
		request.headers!.Authorization = `Bearer ${authTokens?.accessToken}`
	}

	const user: any = jwt_decode(authTokens.accessToken)
	const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

	if (!isExpired) return request

	const refreshInstance = genAxiosRefreshToken()
	const response = await refreshInstance.get('/auth/refresh')

	persistentStorage.setItem('authTokens', response.data)
	authTokens = response.data
	request.headers!.Authorization = `Bearer ${response.data.accessToken}`
	return request
})

export default axiosInstance
