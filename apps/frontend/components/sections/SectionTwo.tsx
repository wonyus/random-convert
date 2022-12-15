import { Title, Text, Container, Grid, Image, Button } from '@mantine/core'

const SectionTwo = () => {
	//const theme = useMantineTheme();

	return (
		<section id="section-two">
			<Container>
				<Grid justify="space-around">
					<Grid.Col xs={6} sm={8} md={8} lg={8}>
						<div style={{ marginBottom: 20 }}>
							<Text color="black" weight={500} size={18}>
								<Title order={1}>Internship Experiences</Title>
								Full stack Developer with integration Team at AppMan Co., Ltd.<br></br>
								Jun 2022 - Nov 2022
							</Text>
						</div>
					</Grid.Col>
					<Grid.Col xs={6} sm={4} md={4} lg={4}>
						<Image src={'/images/lime-surfing.png'} alt={'sample1'} style={{ width: '100%' }} />
					</Grid.Col>
				</Grid>
			</Container>
		</section>
	)
}

export default SectionTwo
