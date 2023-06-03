import axios from 'axios'
import { setupInterceptorsTo } from './Interceptors'

const baseURL = process.env.NEXT_PUBLIC_APP_ENDPOINT

export const genAxiosRefreshToken = () => {
	const refreshInstance = setupInterceptorsTo(
		axios.create({
			baseURL,
			headers: {
				'Access-Control-Allow-Origin': 'https://api.randomnconvert.online',
				'Access-Control-Allow-Headers': '*',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		}),
	)
	return refreshInstance
	
}
