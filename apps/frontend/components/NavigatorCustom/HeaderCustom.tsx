import {
	Header,
	HoverCard,
	Group,
	Button,
	UnstyledButton,
	Text,
	SimpleGrid,
	ThemeIcon,
	Anchor,
	Divider,
	Center,
	Box,
	Burger,
	Drawer,
	Collapse,
	ScrollArea,
} from '@mantine/core'
import { BurgerProps } from '.'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown, IconBrandCss3, IconBrandHtml5, IconBrandJavascript } from '@tabler/icons'
import { useStyles } from './styles'
import Link from 'next/link'
import SignoutComponent from '../auth/signout'
import useStore from '../../hooks/useStore'
import Image from 'next/image'

const mockdata = [
	{
		icon: IconBrandJavascript,
		link: '/minijs',
		title: 'Minify JS',
		description: 'Minify javascript language',
	},
	{
		icon: IconBrandHtml5,
		link: '/minihtml',
		title: 'Minify HTML',
		description: 'Minify HTML language',
	},
	{
		icon: IconBrandCss3,
		link: '/minicss',
		title: 'Minify CSS',
		description: 'Minify CSS language',
	},
]
export function HeaderCustom({ burgerOpened, toggleBurger, closeBurger }: BurgerProps) {
	const [{ user }, dispatch] = useStore()

	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
	const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
	const { classes, theme } = useStyles()

	const links = mockdata.map((item) => (
		<UnstyledButton className={classes.headersubLink} key={item.title}>
			<Group noWrap align="flex-start">
				<Link href={item.link} className={classes.dropdownlink}>
					<ThemeIcon size={34} variant="default" radius="md">
						<item.icon size={22} color={theme.fn.primaryColor()} />
					</ThemeIcon>
					<div>
						<Text size="sm" weight={500}>
							{item.title}
						</Text>
						<Text size="xs" color="dimmed">
							{item.description}
						</Text>
					</div>
				</Link>
			</Group>
		</UnstyledButton>
	))

	const btnHeaderHiddenMobile = user.loggedIn ? (
		<SignoutComponent />
	) : (
		<>
			<Link href={'/auth/signin'}>
				<Button variant="default">Log in</Button>
			</Link>
			<Link href={'/auth/signup'}>
				<Button>Sign up</Button>
			</Link>
		</>
	)

	return (
		<Box pb={60}>
			<Header height={60} sx={{ position: 'fixed' }} px="md">
				<Group position="apart" sx={{ height: '100%' }}>
					<Group>
						<Burger opened={burgerOpened} onClick={toggleBurger} size="sm" />
						<Image src="/icon/logo.png" alt="me" width="32" height="32" />
						{/* <MantineLogo size={28} /> */}
					</Group>

					<Group sx={{ height: '100%' }} spacing={0} className={classes.headerhiddenMobile}>
						<Link href={'/'} className={classes.headerlink}>
							Home
						</Link>
						<HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
							<HoverCard.Target>
								<a href="#" className={classes.headerlink}>
									<Center inline>
										<Box component="span" mr={5}>
											Minify
										</Box>
										<IconChevronDown size={16} color={theme.fn.primaryColor()} />
									</Center>
								</a>
							</HoverCard.Target>

							<HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
								<Group position="apart" px="md">
									<Text weight={500}>Minify</Text>
									<Anchor href="#" size="xs">
										View all
									</Anchor>
								</Group>

								<Divider my="sm" mx="-md" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

								<SimpleGrid cols={2} spacing={0}>
									{links}
								</SimpleGrid>

								{/* <div className={classes.headerdropdownFooter}>
									<Group position="apart">
										<div>
											<Text weight={500} size="sm">
												Get started
											</Text>
											<Text size="xs" color="dimmed">
												Their food sources have decreased, and their numbers
											</Text>
										</div>
										<Button variant="default">Get started</Button>
									</Group>
								</div> */}
							</HoverCard.Dropdown>
						</HoverCard>
						<Link href={'/converts'} className={classes.headerlink}>
							Converts
						</Link>
						<Link href={'/portfolio'} className={classes.headerlink}>
							Portfolio
						</Link>
					</Group>
					<Group className={classes.headerhiddenMobile}>{btnHeaderHiddenMobile}</Group>
					<Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.headerhiddenDesktop} />
				</Group>
			</Header>

			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size="100%"
				padding="md"
				title="Navigation"
				className={classes.headerhiddenDesktop}
				zIndex={1000000}
			>
				<ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
					<Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

					<a href="#" className={classes.headerlink}>
						Home
					</a>
					<UnstyledButton className={classes.headerlink} onClick={toggleLinks}>
						<Center inline>
							<Box component="span" mr={5}>
								Features
							</Box>
							<IconChevronDown size={16} color={theme.fn.primaryColor()} />
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened}>{links}</Collapse>
					<Link href={'#'} className={classes.headerlink}>
						Learn
					</Link>
					<Link href={'#'} className={classes.headerlink}>
						Academy
					</Link>
					<Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

					<Group position="center" grow pb="xl" px="md">
						{btnHeaderHiddenMobile}
					</Group>
				</ScrollArea>
			</Drawer>
		</Box>
	)
}
