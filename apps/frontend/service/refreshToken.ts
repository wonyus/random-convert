import axios from 'axios'
import { setupInterceptorsTo } from './Interceptors'

const baseURL = process.env.ENDPOINT

export const genAxiosRefreshToken = () => {
	const refreshInstance = setupInterceptorsTo(
		axios.create({
			baseURL,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true',
				'Access-Control-Allow-Headers': 'content-type',
			},
		}),
	)
	return refreshInstance
}
