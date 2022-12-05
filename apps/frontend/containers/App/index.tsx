import { FC } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { Button, Text } from '@mantine/core'
import useNotifications from '../../hooks/useNotifications'
import { setJWTAction } from '../../store/actions'
import { useAtom } from 'jotai'
import storeAtom from '../../store'
const Center = styled.div({
	width: '100vw',
	height: '93.5vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
})

const AppContainer: FC = () => {
	const router = useRouter()
	const { callNotification } = useNotifications()
	const [state, dispatch] = useAtom(storeAtom)

	const handleLogout = (e: any) => {
		console.log(state)

		try {
			dispatch(setJWTAction({ data: 111 }))
			callNotification({ message: 'Logout successfully', type: 'success' })
		} catch (err: any) {
			callNotification({ message: err.message, type: 'error' })
		}
	}

	return (
		<Center>
			<Text size={48} weight="bold" color="blue">
				Welcome
			</Text>
			<Text size={48} weight="bold" color="blue">
				Welcome
			</Text>

			<Button onClick={(evt) => handleLogout(evt)} component="a" size="lg">
				Sign In
			</Button>
		</Center>
	)
}

export default AppContainer
