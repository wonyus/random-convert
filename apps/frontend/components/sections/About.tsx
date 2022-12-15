import { Text, Container, Anchor, MediaQuery, Button } from '@mantine/core'
import { IconArrowDown } from '@tabler/icons'
import { Link } from 'react-scroll'

const About = () => {
	//const theme = useMantineTheme();

	return (
		<section id="about">
			<Container fluid>
				<div className="about-content">
					<div style={{ marginBottom: 15 }}>
						<Text>
							<MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2.8rem !important' }}>
								<h1 className="title">Welcome to My Portfolio</h1>
							</MediaQuery>
						</Text>
					</div>

					<div style={{ marginBottom: 25 }}>
						<Text size="xl" color="black">
							Created by wonyus
						</Text>
					</div>

					<div className="buttons">
						<Link to="section-one" smooth duration={500}>
							<Button color="yellow" rightIcon={<IconArrowDown size={16} />} radius="lg" size="md">
								More about me
							</Button>
						</Link>

						<Button variant="default" radius="lg" size="md">
							Download Resume
						</Button>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default About
