import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { IconArrowLeft } from '@tabler/icons'
import { createStyles, Paper, Title, Text, TextInput, Button, Container, Group, Center, Box, Tabs } from '@mantine/core'
import useNotifications from '../../hooks/useNotifications'
import Link from 'next/link'
import ConvertMetric from './metric'
import { atom, useAtom } from 'jotai'

const useStyles = createStyles((theme) => ({
	title: {
		fontSize: 26,
		fontWeight: 900,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	controls: {
		[theme.fn.smallerThan('xs')]: {
			flexDirection: 'column-reverse',
		},
	},

	control: {
		[theme.fn.smallerThan('xs')]: {
			width: '100%',
			textAlign: 'center',
		},
	},
}))
const tabMetricAtom = atom('Metric')

const ConvertsContainer: FC = () => {
	const router = useRouter()
	const { classes } = useStyles()
	const { callNotification } = useNotifications()
	const [activeTab, setActiveTab] = useAtom<string | null>(tabMetricAtom)
	const handleForgotPassword = async () => {
		try {
			callNotification({ message: 'Login successfully', type: 'success', status: 200 })
		} catch (err: any) {
			callNotification({ message: err.message, type: 'error', status: 200 })
		}
	}
	return (
		<Container size="xl">
			<Title className={classes.title} align="center" sx={{ paddingTop: 20 }}>
				{`Convert ${activeTab}`}
			</Title>

			<Paper withBorder shadow="md" p={30} radius="md" mt="xl" sx={{ minHeight: 450 }}>
				<Tabs value={activeTab} onTabChange={setActiveTab}>
					<Tabs.List>
						<Tabs.Tab value="Metric">Metric tab</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value="Metric">
						<ConvertMetric />
					</Tabs.Panel>
				</Tabs>
			</Paper>
		</Container>
	)
}

export default ConvertsContainer
