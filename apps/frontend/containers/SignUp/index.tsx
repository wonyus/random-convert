import { FC, forwardRef } from 'react'
import { useRouter } from 'next/router'
import { TextInput, PasswordInput, Paper, Title, Text, Container, Group, Button, Select, Box } from '@mantine/core'
import useNotifications from '../../hooks/useNotifications'
import Link from 'next/link'
import { IconGenderFemale, IconGenderMale } from '@tabler/icons'

const data = [
	{ label: 'Male', value: 'male', icon: <IconGenderMale /> },
	{ label: 'Female', value: 'female', icon: <IconGenderFemale /> },
]
interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
	icon: JSX.Element
	label: string
	value: string
}

const SignUpContainer: FC = () => {
	const router = useRouter()
	const { callNotification } = useNotifications()

	const handleSignUp = async () => {
		try {
			callNotification({ message: 'Login successfully', type: 'success', status: 200 })
		} catch (err: any) {
			callNotification({ message: err.message, type: 'error', status: 200 })
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
				<TextInput label="Username" placeholder="Username" required />
				<TextInput label="Email" placeholder="you@randomnconvert.dev" required />
				<PasswordInput label="Password" placeholder="Your password" required mt="md" />
				<Select
					label="Gender"
					placeholder="Pick one"
					itemComponent={SelectItem}
					data={data}
					searchable
					maxDropdownHeight={400}
					nothingFound="Not Found"
					filter={(value, item: any) => item.label.toLowerCase().includes(value.toLowerCase().trim())}
				/>
				<Group position="apart" mt="lg">
					<Link href={'/auth/signin'}>
						<Text color="dimmed" size="sm" align="center" mt={5}>
							Sign in?
						</Text>{' '}
					</Link>
				</Group>
				<Button fullWidth mt="xl">
					Sign up
				</Button>
			</Paper>
		</Container>
	)
}

export default SignUpContainer
