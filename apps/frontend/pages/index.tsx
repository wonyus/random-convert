import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import AppContainer from '../containers/App'
import { persistentStorage } from '../utils/useStorage/persistentStorage'

const IndexPage: NextPage = () => {
	const { data: session, status } = useSession()
	if (session && !persistentStorage.getItem('authTokens')) {
		persistentStorage.setItem('authTokens', session.tokens)
	}

	return <AppContainer />
}

export default IndexPage
