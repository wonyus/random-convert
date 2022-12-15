import { FC } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import useNotifications from '../../hooks/useNotifications'
import { setJWTAction } from '../../store/actions'
import useStore from '../../hooks/useStore'
const Center = styled.div({
	width: '100vw',
	height: '93.5vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
})

const PortfolioContainer: FC = () => {
	const router = useRouter()
	const { callNotification } = useNotifications()
	const [state, dispatch] = useStore()

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
			
		</Center>
	)
}

export default PortfolioContainer
