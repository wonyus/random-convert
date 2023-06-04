import axios from 'axios'
import { setupInterceptorsTo } from './Interceptors'

const baseURL = process.env.NEXT_PUBLIC_APP_ENDPOINT
export const AxiosGlobal = () => {
	const globalInstance = setupInterceptorsTo(
		axios.create({
			baseURL,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true',
				'Access-Control-Allow-Headers': '*',
			},
		}),
	)
	return globalInstance
}
const defaultInstance = AxiosGlobal()
export default defaultInstance
