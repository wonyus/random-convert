import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import SignUpContainer from '../../containers/SignUp'

const SignUpPage: NextPage = () => {
	const router = useRouter()
	const { data: session, status } = useSession()

	useEffect(() => {
		if (session) {
			;(() => {
				router.push('/')
			})()
		}
	}, [])
	return <SignUpContainer />
}

export default SignUpPage
