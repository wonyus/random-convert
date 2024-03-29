import { useEffect, useState } from 'react'
import { Navbar, SegmentedControl, Text, Drawer, Stack, Tooltip, UnstyledButton } from '@mantine/core'
import {
	IconLogout,
	TablerIcon,
	IconBrandJavascript,
	IconBrandHtml5,
	IconBrandCss3,
	IconLogin,
	IconUserPlus,
} from '@tabler/icons'
import { useStyles } from './styles'
import { BurgerProps } from '.'
import Link from 'next/link'
import useStore from '../../hooks/useStore'
import { onClickSignout } from '../auth/signout'

interface NavbarLinkProps {
	icon: TablerIcon
	label: string
	active?: boolean
	onClick?(): void
}
const tabs = {
	account: [
		{ link: '/minijs', label: 'Minify JS', icon: IconBrandJavascript },
		{ link: '/minihtml', label: 'Minify HTML', icon: IconBrandHtml5 },
		{ link: '/minicss', label: 'Minify CSS', icon: IconBrandCss3 },
	],
	general: [
		{ link: '/minijs', label: 'Minify JS', icon: IconBrandJavascript },
		{ link: '/minihtml', label: 'Minify HTML', icon: IconBrandHtml5 },
		{ link: '/minicss', label: 'Minify CSS', icon: IconBrandCss3 },
	],
}

const mockdata = [
	{ link: '/minijs', label: 'Minify JS', icon: IconBrandJavascript },
	{ link: '/minihtml', label: 'Minify HTML', icon: IconBrandHtml5 },
	{ link: '/minicss', label: 'Minify CSS', icon: IconBrandCss3 },
]

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
	const { classes, cx } = useStyles()
	return (
		<Tooltip label={label} position="right" >
			<UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
				<Icon stroke={1.5} />
			</UnstyledButton>
		</Tooltip>
	)
}
export function DrawerCustom({ burgerOpened, toggleBurger, closeBurger }: BurgerProps) {
	const { classes, cx } = useStyles()
	const [{ user }, dispatch] = useStore()
	const [section, setSection] = useState<'account' | 'general'>('account')
	const [drawerActive, setDrawerActive] = useState('Billing')
	const [active, setActive] = useState<number>(2)
	const [height, setHeight] = useState<number>(0)

	useEffect(() => setHeight(window.innerHeight), [])
	const linksDrawer = tabs[section].map((item) => (
		<Link
			className={cx(classes.linkdrawer, { [classes.linkActive]: item.label === drawerActive })}
			href={item.link}
			key={item.label}
			onClick={() => {
				setDrawerActive(item.label)
			}}
		>
			<item.icon className={classes.linkIcon} stroke={1.5} />
			{item.label}
		</Link>
	))

	const links = mockdata.map((link, index) => (
		<Link href={link.link} key={link.label}>
			<NavbarLink {...link} active={index === active} onClick={() => setActive(index)} />
		</Link>
	))

	const navLink = user.loggedIn ? (
		<>
			<a
				className={classes.linkdrawer}
				onClick={(e) => {
					e.preventDefault()
					onClickSignout()
				}}
			>
				<IconLogout className={classes.linkIcon} stroke={1.5} />
				Sign Out
			</a>
		</>
	) : (
		<>
			<Link href={'/auth/signin'} className={classes.linkdrawer}>
				<IconLogin className={classes.linkIcon} stroke={1.5} />
				Log in
			</Link>
			<Link href={'/auth/signup'} className={classes.linkdrawer}>
				<IconUserPlus className={classes.linkIcon} stroke={1.5} />
				Sign up
			</Link>
		</>
	)

	return (
		<>
			<Navbar height={height - 60} width={{ base: 80 }} className={classes.navbarsection} p="md">
				<Navbar.Section grow mt={50}>
					<Stack justify="center" spacing={0}>
						{links}
					</Stack>
				</Navbar.Section>
				<Navbar.Section>
					<Stack justify="center" spacing={0}>
						{user.loggedIn ? <NavbarLink icon={IconLogout} label="Logout" /> : null}
					</Stack>
				</Navbar.Section>
			</Navbar>
			<Drawer opened={burgerOpened} onClose={closeBurger} title="Register" padding="xl" size="lg">
				<Navbar height={840} width={{ sm: 300 }} p="md" className={classes.navbar}>
					<Navbar.Section>
						<Text weight={500} size="sm" className={classes.title} color="dimmed" mb="xs">
							bgluesticker@mantine.dev
						</Text>

						<SegmentedControl
							value={section}
							onChange={(value: 'account' | 'general') => setSection(value)}
							transitionTimingFunction="ease"
							fullWidth
							data={[
								{ label: 'Account', value: 'account' },
								{ label: 'System', value: 'general' },
							]}
						/>
					</Navbar.Section>

					<Navbar.Section grow mt="xl">
						{linksDrawer}
					</Navbar.Section>

					<Navbar.Section className={classes.footer}>{navLink}</Navbar.Section>
				</Navbar>
			</Drawer>
		</>
	)
}
