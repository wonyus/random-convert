import { useEffect, useState } from 'react'
import { Navbar, SegmentedControl, Text, Drawer, Stack, Tooltip, UnstyledButton } from '@mantine/core'
import {
	IconShoppingCart,
	IconLicense,
	IconMessage2,
	IconMessages,
	IconFingerprint,
	IconKey,
	IconSettings,
	Icon2fa,
	IconUsers,
	IconFileAnalytics,
	IconDatabaseImport,
	IconReceiptRefund,
	IconLogout,
	IconSwitchHorizontal,
	TablerIcon,
	IconHome2,
	IconGauge,
	IconDeviceDesktopAnalytics,
	IconCalendarStats,
	IconUser,
	IconBrandJavascript,
	IconBrandHtml5,
	IconBrandCss3,
} from '@tabler/icons'
import { useStyles } from './styles'
import { BurgerProps } from '.'
import Link from 'next/link'

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
		<Tooltip label={label} position="right" transitionDuration={0}>
			<UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
				<Icon stroke={1.5} />
			</UnstyledButton>
		</Tooltip>
	)
}
export function DrawerCustom({ burgerOpened, toggleBurger, closeBurger }: BurgerProps) {
	const { classes, cx } = useStyles()
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
						<NavbarLink icon={IconSwitchHorizontal} label="Change account" />
						<NavbarLink icon={IconLogout} label="Logout" />
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

					<Navbar.Section className={classes.footer}>
						<a href="#" className={classes.linkdrawer} onClick={(event) => event.preventDefault()}>
							<IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
							<span>Change account</span>
						</a>

						<a href="#" className={classes.linkdrawer} onClick={(event) => event.preventDefault()}>
							<IconLogout className={classes.linkIcon} stroke={1.5} />
							<span>Logout</span>
						</a>
					</Navbar.Section>
				</Navbar>
			</Drawer>
		</>
	)
}
