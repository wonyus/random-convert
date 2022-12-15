import { Accordion, Text, Container, Title, Badge } from '@mantine/core'
import { IconAnchorOff, IconCloudSnow, IconAnchor } from '@tabler/icons'

const SectionFive = () => {
	//const theme = useMantineTheme();

	return (
		<section id="section-five">
			<Container>
				<div style={{ marginBottom: 30 }}>
					<Text color="black">
						<Title order={1} style={{ marginTop: 10 }}>
							Tools
						</Title>
					</Text>
				</div>

				<Accordion variant="contained">
					<Accordion.Item value="item1">
						<Accordion.Control icon={<IconAnchor size={20} color={'#fab005'} />}>
							Is Dennis Farina famous?
						</Accordion.Control>
						<Accordion.Panel>Yes, of course.</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="item2">
						<Accordion.Control icon={<IconCloudSnow size={20} color={'#fab005'} />}>
							Are pineapples good?
						</Accordion.Control>
						<Accordion.Panel>Unfortunately no.</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="item3">
						<Accordion.Control icon={<IconAnchorOff size={20} color={'#fab005'} />}>
							Do you like yellow?
						</Accordion.Control>
						<Accordion.Panel>Oh yes!</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
			</Container>
		</section>
	)
}

export default SectionFive
