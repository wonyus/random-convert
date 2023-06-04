import { Button } from '@mantine/core'
import { signOut } from 'next-auth/react'
import useNotifications from '../../hooks/useNotifications'
import { persistentStorage } from '../../utils/useStorage/persistentStorage'

const SignoutComponent = () => {
	const { callNotification } = useNotifications()

	const handleSignOut = async () => {
		try {
			//call api sign out
			signOut()
			persistentStorage.removeItem('authTokens')
			callNotification({ message: 'Logout successfully', type: 'success', status: 200 })
		} catch (err: any) {
			callNotification({ message: err.message, type: 'error', status: 400 })
		}
	}
	return (
		<>
			<Button onClick={() => handleSignOut()}>Sign out</Button>
		</>
	)
}

export const onClickSignout = () => {
	const { callNotification } = useNotifications()
	try {
		//call api sign out
		signOut()
		persistentStorage.removeItem('authTokens')
		callNotification({ message: 'Logout successfully', type: 'success', status: 200 })
	} catch (err: any) {
		callNotification({ message: err.message, type: 'error', status: 400 })
	}
}

export default SignoutComponent
