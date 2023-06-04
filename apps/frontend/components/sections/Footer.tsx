import { useMantineTheme, Container, Grid, Text, Group } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconMapPin, IconPhone } from '@tabler/icons'

const Footer = () => {
	const theme = useMantineTheme()

	return (
		<footer style={{ backgroundColor: theme.colors.yellow[6] }}>
			<Container>
				<Grid justify="left" id="section-footer">
					<Grid.Col xs={12} sm={6} md={6} lg={6}>
						<Group>
							<Text size="xl" weight={700} color="white" mb="10px">
								Contact to me
							</Text>
							<Group>
								<IconMapPin color="white" />
								<Text color="white" mb="5px">
									{'   '}9/16 Village phahonyothin Road,
									<br /> Khlongnueng, Khlongluang, pathumthani 12120
								</Text>
							</Group>
							<Group>
								<IconMail color="white" />
								<Text color="white" mb="5px">
									{'   '}imronyusoh@outlook.com
								</Text>
							</Group>
							<Group>
								<IconBrandGithub color="white" />
								<Text color="white" mb="5px">
									{'   '}https://github.com/wonyus
								</Text>
							</Group>
							<Group>
								<IconBrandLinkedin color="white" />
								<Text color="white" mb="5px">
									{'   '}www.linkedin.com/in/imronyusoh
								</Text>
							</Group>
							<Group>
								<IconPhone color="white" />
								<Text color="white" mb="5px">
									{'   '}+66 93 680 7198
								</Text>
							</Group>
						</Group>
					</Grid.Col>
				</Grid>
			</Container>
		</footer>
	)
}

export default Footer

const redirectToLink = (link: string): void => {
	window.open(link, '_blank')
}
