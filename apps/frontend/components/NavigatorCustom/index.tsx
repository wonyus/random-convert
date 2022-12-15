import { useDisclosure } from '@mantine/hooks'
import { DrawerCustom } from './DrawerCustom'
import { HeaderCustom } from './HeaderCustom'

export interface BurgerProps {
	burgerOpened: boolean
	toggleBurger(): void
	closeBurger(): void
}

const NavigatorCustom = () => {
	const [burgerOpened, { toggle: toggleBurger, close: closeBurger }] = useDisclosure(false)
	return (
		<>
			<HeaderCustom burgerOpened={burgerOpened} toggleBurger={toggleBurger} closeBurger={closeBurger} />
			{/* <DrawerCustom burgerOpened={burgerOpened} toggleBurger={toggleBurger} closeBurger={closeBurger} /> */}
		</>
	)
}

export default NavigatorCustom
