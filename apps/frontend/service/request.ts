import axiosInstance from './axiosInstance'
import { persistentStorage } from '../utils/useStorage/persistentStorage'
import axios from 'axios'

export const logIn = async (header: any, formdata: any) => {
	const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login', formdata)
	const { data }: any = response
	return data
}

export const getAllPost = async (header: any, formdata: any) => {
	const response = await axiosInstance.get('/posts/test', formdata)
	const { data }: any = response
	return data
}

