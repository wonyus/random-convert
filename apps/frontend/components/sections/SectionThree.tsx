import { Grid, Text, Container, Title, Image, Button } from '@mantine/core'

const SectionThree = () => {
	//const theme = useMantineTheme();

	return (
		<section id="section-three">
			<Container>
				<Grid justify="space-around">
					<Grid.Col xs={6} sm={4} md={4} lg={4}>
						<Image src="images/lime-bicycle-riding.png" alt={'sample2'} style={{ width: '100%' }} />
					</Grid.Col>
					<Grid.Col xs={6} sm={8} md={8} lg={8}>
						<div style={{ marginBottom: 20 }}>
							<Text color="black">
								<Title order={1}>My Skill</Title>
								Dennis Farina is unique among thespians in that he was one of the few to achieve success
								as a "late-bloomer." He did not start acting until he was 37 years old, after stints in
								the military and 18 years on the Chicago Police Department.
							</Text>
						</div>
						<Button color="yellow">Tell me more</Button>
					</Grid.Col>
				</Grid>
			</Container>
		</section>
	)
}

export default SectionThree
