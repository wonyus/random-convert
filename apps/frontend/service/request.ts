import axiosInstance from './axiosInstance'
import defaultInstance from './axiosglobal'
interface RequestAxios {
	header: any
	formdata: any
}
const requestForm: RequestAxios = {
	header: {},
	formdata: {},
}

export const logIn = async (header: any, formdata: any) => {
	const response = await defaultInstance.post('/auth-service/login', formdata)
	const { data }: any = response
	return data
}

export const refresh = async (header: any, formdata: any) => {
	const response = await defaultInstance.get('/auth/refresh', { headers: { ...header } }).catch((e) => console.log(e.data))

	const { data }: any = response
	return data
}

export const register = async (header: any, formdata: any) => {
	try {
		const response = await defaultInstance.post('/auth-service/signup', formdata)
		const { data }: any = response
		return data
	} catch (error: any) {
		throw error
	}
}

export const getNewtoken = async (header: any, formdata: any) => {
	const response = await defaultInstance.post('/auth-service/refresh', formdata)
	const { data }: any = response
	return data
}

export const getAllPost = async (header: any, formdata: any) => {
	const response = await axiosInstance.get('/posts/test', formdata)
	const { data }: any = response
	return data
}

export const getUser = async (header: any, formdata: any) => {
	const response = await axiosInstance.get('/auth-service/user', formdata)
	const { data }: any = response
	return data
}
