import axiosInstance from './axiosInstance'
import defaultInstance from './axiosglobal'

export const logIn = async (header: any, formdata: any) => {
	const response = await defaultInstance.post('/auth/login', formdata)
	const { data }: any = response
	return data
}

export const register = async (header: any, formdata: any) => {
	const response = await defaultInstance.post('/auth/signup', formdata)
	const { data }: any = response
	return data
}

export const getAllPost = async (header: any, formdata: any) => {
	const response = await axiosInstance.get('/posts/test', formdata)
	const { data }: any = response
	return data
}

export const getUser = async (header: any, formdata: any) => {
	const response = await axiosInstance.get('/users', formdata)
	const { data }: any = response
	return data
}
