import { useMantineTheme, Container, Text, Title, Grid, Card, Image, Badge, Button, Group } from '@mantine/core';

const SectionFour = () => {
    const theme = useMantineTheme();

    return (
        <section id="section-four">
            <Container>
                <Text color="black" align="center">
                    <Title order={1} mb="30px">Tools</Title>
                </Text>

                <Grid>
                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Card shadow="sm" p="lg" style={{ height: '100%'}}>
                            <Card.Section>
                                <Image src={'/images/lime-welcome.png'} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>History of Dennis Farina</Text>
                                <Badge color="yellow" variant="light">
                                    Cool badge
                                </Badge>
                            </Group>

                            <Text size="sm">
                                Discover the career of Dennis Farina and his roles in movies!
                            </Text>

                            <Button variant="light" color="yellow" fullWidth mt="14px">
                                Find out
                            </Button>
                        </Card>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Card shadow="sm" p="lg" style={{ height: '100%' }}>
                            <Card.Section>
                                <Image src={'/images/lime-canoeing.png'} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Career of Dennis Farina</Text>
                                <Badge color="yellow" variant="light">
                                    Cool badge 2
                                </Badge>
                            </Group>

                            <Text size="sm">
                                Dennis Farina had a really great career with many opportunities!
                            </Text>

                            <Button variant="light" color="yellow" fullWidth mt="14px">
                                Find out
                            </Button>
                        </Card>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Card shadow="sm" p="lg" style={{ height: '100%' }}>
                            <Card.Section>
                                <Image src={'/images/lime-message-sent.png'} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Major roles of Dennis Farina</Text>
                                <Badge color="yellow" variant="light">
                                    Cool badge 3
                                </Badge>
                            </Group>

                            <Text size="sm">
                                Discover the major roles of Dennis Farina and something else!
                            </Text>

                            <Button variant="light" color="yellow" fullWidth mt="14px">
                                Find out
                            </Button>
                        </Card>
                    </Grid.Col>
                </Grid>

            </Container>
        </section>
    );
};

export default SectionFour;