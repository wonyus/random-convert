import { Carousel } from '@mantine/carousel'
import { Text, Container, useMantineTheme, Title } from '@mantine/core'

const SectionOne = () => {
	const theme = useMantineTheme()

	const carouselContent = {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column' as 'column',
		backgroundColor: theme.colors.yellow[3],
		borderRadius: 15,
		gap: 15,
	}

	return (
		<section id="section-one">
			<br></br>
			<br></br>
			<Container>
				<Text color="black" align="center" mb="15px">
					<Title order={1}>My Experiences</Title>
				</Text>
				<Text color="black" align="center" mb="15px">
					<Title order={2}>Projects</Title>
				</Text>

				<Carousel
					withIndicators
					height={300}
					slideSize="33.333333%"
					slideGap="md"
					breakpoints={[
						{ maxWidth: 'md', slideSize: '50%' },
						{ maxWidth: 'sm', slideSize: '100%', slideGap: 15 },
					]}
					loop
					align="start"
					pr="10px"
					pl="10px"
				>
					<Carousel.Slide>
						<div style={carouselContent}>
							<Title order={4} align={'center'}>
								MOC MOBILE APPLICATION
							</Title>
							<Text align={'center'}>Front-End Developer</Text>
							<Text>Jul 2020 - Nov 2020</Text>
							<Text weight={500}>React Native, Express, MongoDB</Text>
						</div>
					</Carousel.Slide>
					<Carousel.Slide>
						<div style={carouselContent}>
							<Title order={4} align={'center'}>
								LEARNINGSTRIKE <br></br>WEB APPLICATION
							</Title>
							<Text align={'center'}>Front / Back-End Developer</Text>
							<Text>Mar 2021 - May 2021</Text>
							<Text weight={500}>React, Express, Firebase</Text>
						</div>
					</Carousel.Slide>
					<Carousel.Slide>
						<div style={carouselContent}>
							<Title order={4} align={'center'}>
								COMMUNITY TALKTOWN <br></br>WEB APPLICATION
							</Title>
							<Text align={'center'}>Software Design, Front/Back-End Developer</Text>
							<Text>Sep 2021 - Nov 2021</Text>
							<Text weight={500}>React, Firebase</Text>
						</div>
					</Carousel.Slide>
					<Carousel.Slide>
						<div style={carouselContent}>
							<Title order={4} align={'center'}>
								WONGLOU
							</Title>
							<Text align={'center'}>Software Design, Front-End Developer</Text>
							<Text>Jan 2022 - Apr 2022</Text>
							<Text weight={500}>React Native</Text>
						</div>
					</Carousel.Slide>
				</Carousel>
			</Container>
		</section>
	)
}

export default SectionOne
