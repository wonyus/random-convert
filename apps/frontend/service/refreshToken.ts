import axios from 'axios'
import { setupInterceptorsTo } from './Interceptors'

const baseURL = process.env.NEXT_PUBLIC_APP_ENDPOINT

export const genAxiosRefreshToken = () => {
	const refreshInstance = setupInterceptorsTo(
		axios.create({
			baseURL,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true',
				'Access-Control-Allow-Headers': 'content-type',
				'Content-Type': 'application/json',
			},
		}),
	)
	return refreshInstance
}
