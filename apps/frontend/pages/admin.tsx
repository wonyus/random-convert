import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import AppContainer from '../containers/App'

const adminPage: NextPage = () => {
	const { data: session, status } = useSession()
	console.log(session, status, 1)

	return <h1>admin</h1>
}

export default adminPage
