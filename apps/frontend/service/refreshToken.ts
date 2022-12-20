import axios from 'axios'
import { setupInterceptorsTo } from './Interceptors'

const baseURL = process.env.NEXT_PUBLIC_APP_ENDPOINT

export const genAxiosRefreshToken = () => {
	const refreshInstance = setupInterceptorsTo(
		axios.create({
			baseURL,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST GET OPTIONS',
				'Access-Control-Allow-Headers': '*',
				'Access-Control-Max-Age': 1728000,
				'Content-Type': 'application/x-www-form-urlencoded',
				'charset':'UTF-8;application/json'
				
			},
		}),
	)
	return refreshInstance
}
