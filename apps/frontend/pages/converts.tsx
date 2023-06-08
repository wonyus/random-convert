import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import ConvertsContainer from '../containers/Converts'
import useStore from '../hooks/useStore'
import { getUser } from '../service/request'
import { setUser } from '../store/actions'
import { persistentStorage } from '../utils/useStorage/persistentStorage'

const ConvertPage: NextPage = () => {
	const [{ user }, dispatch] = useStore()
	const { data: session } = useSession()

	useEffect(() => {
		if ((!user.loggedIn && session) || (!user.loggedIn && persistentStorage.getItem('authTokens'))) {
			;(async () => {
				const userData = await getUser({}, {})
				dispatch(setUser({ ...userData, loggedIn: true }))
			})()
		}
	}, [])

	return <ConvertsContainer />
}

export default ConvertPage
