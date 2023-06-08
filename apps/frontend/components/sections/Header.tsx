import React from 'react'
import { Button, Badge, Burger, Drawer, Code, Title, Anchor, Text } from '@mantine/core'
import { UnstyledButton, Group, Avatar } from '@mantine/core'
import { Link } from 'react-scroll'

const Header = () => {
	//const theme = useMantineTheme();
	const [opened, setOpened] = React.useState(false)
	const title = opened ? 'Close navigation' : 'Open navigation'

	return (
		<header>
			<div className="content-desktop">
				<div>
					<Badge size="lg" radius={10} color="yellow">
						Portfolio
					</Badge>
				</div>
				<div className="navbar">
					<div className="navbar-item">
						<Link to="section-one" smooth duration={500}>
							My Experiences
						</Link>
					</div>
					<div className="navbar-item">
						<Link to="section-three" smooth duration={500}>
							Skills
						</Link>
					</div>
					<div className="navbar-item">
						<Link to="section-four" smooth duration={500}>
							Tools
						</Link>
					</div>
					<div className="navbar-item" onClick={() => redirectToLink('https://github.com/wonyus')}>
						Github
					</div>
					<div
						className="navbar-item"
						onClick={() => redirectToLink('https://www.linkedin.com/in/imronyusoh')}
					>
						Linkedin
					</div>
				</div>
			</div>

			<div className="content-mobile">
				<div className="burger-button">
					<Burger opened={opened} onClick={() => setOpened((o) => !o)} title={title} size="sm" />
				</div>

				<Drawer
					// transition="rotate-right"
					// transitionDuration={250}
					// transitionTimingFunction="ease"
					// overlayOpacity={0.55}
					position="right"
					// closeButtonLabel="Close drawer"
					title="Menu"
					padding="xl"
					opened={opened}
					onClose={() => setOpened(false)}
				>
					<div className="menu">
						<div className="menu-items">
							<div className="menu-item">
								<Link to="section-one" smooth duration={500} onClick={() => setOpened(false)}>
									<Title order={2}>My Experiences</Title>
								</Link>
							</div>
							<div className="menu-item">
								<Link to="section-three" smooth duration={500} onClick={() => setOpened(false)}>
									<Title order={2}>Skills</Title>
								</Link>
							</div>
							<div className="menu-item">
								<Link to="section-four" smooth duration={500} onClick={() => setOpened(false)}>
									<Title order={2}>Tools</Title>
								</Link>
							</div>
						</div>

						<div className="menu-items">
							<Text>Contact</Text>
							<Anchor href="mailto:imronyusoh@outlook.com">imronyusoh@outlook.com</Anchor>
						</div>

						<Code color="yellow" style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 15 }}>
							<Anchor href="https://github.com/wonyus">
								<UnstyledButton>
									<Group>
										<Avatar size={40} color="orange">
											W
										</Avatar>
										<div>
											<Text>imron yusoh</Text>
											<Text size="xs" color="dimmed">
												imronyusoh@outlook.com
											</Text>
										</div>
									</Group>
								</UnstyledButton>
							</Anchor>
						</Code>
					</div>
				</Drawer>
			</div>
		</header>
	)
}

export default Header

const redirectToLink = (link: string): void => {
	window.open(link, '_blank')
}
