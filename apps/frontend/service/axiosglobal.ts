import axios from 'axios'
import { setupInterceptorsTo } from './Interceptors'

const baseURL = process.env.ENDPOINT

export const AxiosGlobal = () => {
	const globalInstance = setupInterceptorsTo(
		axios.create({
			baseURL,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true',
				'Access-Control-Allow-Headers': 'content-type',
			},
		}),
	)
	return globalInstance
}
const defaultInstance = AxiosGlobal()
export default defaultInstance
