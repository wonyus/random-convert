import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import AppContainer from '../containers/App'
import { persistentStorage } from '../utils/useStorage/persistentStorage'
import { useEffect } from 'react'
import useStore from '../hooks/useStore'
import { getUser } from '../service/request'
import { setUser } from '../store/actions'

const IndexPage: NextPage = () => {
	const [{ user }, dispatch] = useStore()
	const { data: session, status } = useSession()

	if (session && !persistentStorage.getItem('authTokens')) {
		persistentStorage.setItem('authTokens', {
			accessToken: session?.user?.AccessToken,
			refreshToken: session?.user?.RefreshToken,
		})
	}

	useEffect(() => {
		console.log(session);
		
		if ((!user.loggedIn && session) || (!user.loggedIn && persistentStorage.getItem('authTokens'))) {
			;(async () => {
				const userData = await getUser({}, {})
				dispatch(setUser({ ...userData, loggedIn: true }))
			})()
		}
	}, [status])

	return <AppContainer />
}

export default IndexPage
