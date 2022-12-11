import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import useStore from '../hooks/useStore'
import { getUser } from '../service/request'
import { setUser } from '../store/actions'
import { persistentStorage } from '../utils/useStorage/persistentStorage'

const NotFoundPage: NextPage = () => {
	const [{ user }, dispatch] = useStore()
	const { data: session, status } = useSession()

	useEffect(() => {
		if ((!user.loggedIn && session) || (!user.loggedIn && persistentStorage.getItem('authTokens'))) {
			;(async () => {
				const userData = await getUser({}, {})
				dispatch(setUser({ ...userData, loggedIn: true }))
			})()
		}
	}, [])

	return <h1>NotFoundPage</h1>
}

export default NotFoundPage
