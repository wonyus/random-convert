import axios from 'axios'
import { setupInterceptorsTo } from './Interceptors'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'
import { persistentStorage } from '../utils/useStorage/persistentStorage'
import { genAxiosRefreshToken } from './refreshToken'

const baseURL = process.env.NEXT_PUBLIC_APP_ENDPOINT

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

const refreshInstance = genAxiosRefreshToken()
refreshInstance.interceptors.request.use((req) => {
	req.headers!.Authorization = `Bearer ${authTokens?.refreshToken}`
	return req
})
refreshInstance.interceptors.response.use((res) => {
	axiosInstance.defaults.headers!.Authorization = `Bearer ${res.data.accessToken}`
	return res
})

axiosInstance.interceptors.request.use(async (request) => {
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

	const response = await refreshInstance.get('/auth/refresh')
	persistentStorage.setItem('authTokens', response.data)
	request.headers!.Authorization = `Bearer ${response.data.accessToken}`
	return request
})

export default axiosInstance
