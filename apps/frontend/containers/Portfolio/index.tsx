import { FC } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import useNotifications from '../../hooks/useNotifications'
import { setJWTAction } from '../../store/actions'
import useStore from '../../hooks/useStore'
import About from '../../components/sections/About'
import Header from '../../components/sections/Header'
import Footer from '../../components/sections/Footer'
import SectionOne from '../../components/sections/SectionOne'
import SectionTwo from '../../components/sections/SectionTwo'
import SectionThree from '../../components/sections/SectionThree'
import SectionFour from '../../components/sections/SectionFour'
import SectionFive from '../../components/sections/SectionFive'
import { TypographyStylesProvider } from '@mantine/core'
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
			callNotification({ message: 'Logout successfully', type: 'success', status: 200 })
		} catch (err: any) {
			callNotification({ message: err.message, type: 'error', status: 401 })
		}
	}

	return (
		<>
			<TypographyStylesProvider>
				<Header />
				<About />
				<SectionOne />
				<SectionTwo />
				{/* <SectionThree />
				<SectionFour />
				<SectionFive /> */}
				<Footer />
			</TypographyStylesProvider>
		</>
	)
}

export default PortfolioContainer
