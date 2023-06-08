import { FC } from 'react'
import { useRouter } from 'next/router'
import { TextInput, PasswordInput, Checkbox, Paper, Title, Text, Container, Group, Button, Box } from '@mantine/core'
import useNotifications from '../../hooks/useNotifications'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { atom, useAtom } from 'jotai'

interface signInRespone {
	error: string
	status: number
	ok: boolean
}

const usernameAtom = atom('')
const passwordAtom = atom('')
const SignInContainer: FC = () => {
	const router = useRouter()
	const { callNotification } = useNotifications()

	const [username, setUsername] = useAtom(usernameAtom)
	const [password, setPassword] = useAtom(passwordAtom)

	const handleSignIn = async () => {
		const { error, status, ok, url }: any = await signIn('credentials', {
			redirect: false,
			username,
			password,
		})
		if (ok) {
			callNotification({ message: 'Login successfully', type: 'success', status: status })
			router.push('/')
		} else {
			callNotification({ message: error, type: 'error', status: status })
		}
	}

	return (
		<Container size={420} my={40}>
			<Title
				align="center"
				sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
			>
				Welcome to RandomnConvert
			</Title>
			<Text color="dimmed" size="sm" align="center" mt={5}>
				Do not have an account yet? <Link href={'/auth/signup'}>Create account</Link>
			</Text>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<TextInput
					value={username}
					label="Username"
					placeholder="username"
					required
					onChange={(e) => setUsername(e.target.value)}
				/>
				<PasswordInput
					value={password}
					label="Password"
					placeholder="Your password"
					required
					mt="md"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Group position="apart" mt="lg" sx={{ display: 'flex', justifyContent: 'right' }}>
					{/* <Checkbox label="Remember me" sx={{ lineHeight: 1 }} /> */}
					<Link href={'/auth/forgotpassword'}>
						<Text color="dimmed" size="sm" align="center" mt={5}>
							Forgot password?
						</Text>
					</Link>
				</Group>
				<Button fullWidth mt="xl" onClick={() => handleSignIn()}>
					Sign in
				</Button>
			</Paper>
		</Container>
	)
}

export default SignInContainer
