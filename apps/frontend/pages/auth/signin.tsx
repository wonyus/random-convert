import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import SignInContainer from '../../containers/SignIn'

const SignInPage: NextPage = () => {
	const router = useRouter()
	const { data: session, status } = useSession()
	
	useEffect(() => {
		if (session) {
			;(() => {
				router.push('/')
			})()
		}
	}, [])
	return <SignInContainer />
}

export default SignInPage
