import { FC } from 'react'
import { useRouter } from 'next/router'
import { IconArrowLeft } from '@tabler/icons'
import { createStyles, Paper, Title, Text, TextInput, Button, Container, Group, Center, Box } from '@mantine/core'
import useNotifications from '../../hooks/useNotifications'
import Link from 'next/link'

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

const ForgotPasswordContainer: FC = () => {
	const router = useRouter()
	const { classes } = useStyles()
	const { callNotification } = useNotifications()

	const handleForgotPassword = async () => {
		try {
			callNotification({ message: 'Login successfully', type: 'success', status: 200 })
		} catch (err: any) {
			callNotification({ message: err.message, type: 'error', status: 200 })
		}
	}
	return (
		<Container size={460} my={30}>
			<Title className={classes.title} align="center">
				Forgot your password?
			</Title>
			<Text color="dimmed" size="sm" align="center">
				Enter your email to get a reset link
			</Text>

			<Paper withBorder shadow="md" p={30} radius="md" mt="xl">
				<TextInput label="Your email" placeholder="email@randomnconvert.online" required />
				<Group position="apart" mt="lg" className={classes.controls}>
					<Link href={'/auth/signin'}>
						<Text color="dimmed" size="sm" className={classes.control}>
							<Center inline>
								<IconArrowLeft size={12} stroke={1.5} />
								<Box ml={5}>Back to login page</Box>
							</Center>
						</Text>
					</Link>
					<Button className={classes.control}>Reset password</Button>
				</Group>
			</Paper>
		</Container>
	)
}

export default ForgotPasswordContainer
