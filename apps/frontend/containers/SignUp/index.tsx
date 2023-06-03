import { FC, forwardRef } from 'react'
import { useRouter } from 'next/router'
import { TextInput, PasswordInput, Paper, Title, Text, Container, Group, Button, Select, Box } from '@mantine/core'
import useNotifications from '../../hooks/useNotifications'
import Link from 'next/link'
import { IconGenderFemale, IconGenderMale } from '@tabler/icons'
import { atom, useAtom } from 'jotai'
import { register } from '../../service/request'
import { signIn } from 'next-auth/react'

const data = [
	{ label: 'Male', value: 'male', icon: <IconGenderMale /> },
	{ label: 'Female', value: 'female', icon: <IconGenderFemale /> },
]
interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
	icon: JSX.Element
	label: string
	value: string
}
const nameAtom = atom('')
const usernameAtom = atom('')
const passwordAtom = atom('')
const emailAtom = atom('')
const genderAtom = atom('')

const SignUpContainer: FC = () => {
	const router = useRouter()
	const { callNotification } = useNotifications()

	const [name, setName] = useAtom(nameAtom)
	const [username, setUsername] = useAtom(usernameAtom)
	const [password, setPassword] = useAtom(passwordAtom)
	const [email, setEmail] = useAtom(emailAtom)
	const [gender, setGender] = useAtom<string | null>(genderAtom)

	const handleSignUp = async () => {
		try {
			const response = await register({}, { name, username, password, email })

			if (response) {
				signIn('credentials', { username, password })
				callNotification({ message: 'Login successfully', type: 'success' })
			}
		} catch (err: any) {
			callNotification({ message: err.response.data.message, type: 'error' })
		}
	}

	const SelectItem = forwardRef<HTMLDivElement, ItemProps>(({ icon, label, ...others }: ItemProps, ref) => (
		<div ref={ref} {...others}>
			<Group noWrap>
				{icon}
				<Text size="sm">{label}</Text>
			</Group>
		</div>
	))

	return (
		<Container size={420} my={40}>
			<Title
				align="center"
				sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
			>
				Sign up
			</Title>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<TextInput
					label="Username"
					placeholder="Username"
					onChange={(e) => setUsername(e.target.value)}
					required
					mt="md"
				/>
				<TextInput
					label="Email"
					placeholder="you@randomnconvert.dev"
					onChange={(e) => setEmail(e.target.value)}
					required
					mt="md"
				/>
				<TextInput
					label="Name"
					placeholder="name"
					onChange={(e) => setName(e.target.value)}
					required
					mt="md"
				/>
				<PasswordInput
					label="Password"
					placeholder="Your password"
					onChange={(e) => setPassword(e.target.value)}
					required
					mt="md"
				/>
				{/* <Select
					label="Gender"
					onChange={setGender}
					placeholder="Pick one"
					itemComponent={SelectItem}
					data={data}
					searchable
					maxDropdownHeight={400}
					nothingFound="Not Found"
					filter={(value, item: any) => item.label.toLowerCase().includes(value.toLowerCase().trim())}
				/> */}
				<Group position="apart" mt="lg" sx={{ display: 'flex', justifyContent: 'end' }}>
					<Link href={'/auth/signin'}>
						<Text color="dimmed" size="sm" align="center" mt={5}>
							Sign in?
						</Text>{' '}
					</Link>
				</Group>
				<Button fullWidth mt="xl" onClick={() => handleSignUp()}>
					Sign up
				</Button>
			</Paper>
		</Container>
	)
}

export default SignUpContainer
