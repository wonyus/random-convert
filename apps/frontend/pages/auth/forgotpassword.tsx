import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ForgotPasswordContainer from '../../containers/ForgotPassword'

const ForgotPasswordPage: NextPage = () => {
	const router = useRouter()
	const { data: session, status } = useSession()

	useEffect(() => {
		if (session) {
			;(() => {
				router.push('/')
			})()
		}
	}, [])
	return <ForgotPasswordContainer />
}

export default ForgotPasswordPage
