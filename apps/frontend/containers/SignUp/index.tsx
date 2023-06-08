import { FC, forwardRef } from 'react'
import { useRouter } from 'next/router'
import { TextInput, PasswordInput, Paper, Title, Text, Container, Group, Button, Select, Box } from '@mantine/core'
import useNotifications from '../../hooks/useNotifications'
import Link from 'next/link'

import { register } from '../../service/request'
import { signIn } from 'next-auth/react'
import { object } from 'yup'
import { string } from 'yup'
import { Form, Formik } from 'formik'
interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
	icon: JSX.Element
	label: string
	value: string
}

type FormValues = {
	name: string
	email: string
	username: string
	password: string
	confirmPassword: string
}

type Errors = Partial<Record<keyof FormValues, string>>

const signUpSchema = object().shape({
	username: string().min(5, 'Username must be at least 5 characters'),
	email: string().email().required(),
	name: string().required('Name is required'),
	password: string()
		.min(7, 'Password must be at least 7 characters')
		.max(35, 'Password must not exceed 35 characters'),
	confirmPassword: string()
		.min(7, 'Confirm password must be at least 7 characters')
		.max(35, 'Confirm password must not exceed 35 characters')
		.when('password', ([password], schema, { value }) => {
			return password?.length > 0
				? schema.required('ConfirmPassword is required').test({
						name: 'max',
						exclusive: true,
						params: { value },
						message: 'password is not match',
						test: (value) => value == password,
				  })
				: schema.required('ConfirmPassword is required')
		}),
})

const SignUpContainer: FC = () => {
	const { callNotification } = useNotifications()

	const handleSignUp = async (dataForm: FormValues) => {
		try {
			const response = await register(
				{},
				{
					name: dataForm.name,
					username: dataForm.username,
					password: dataForm.password,
					email: dataForm.email,
				},
			)

			if (response) {
				signIn('credentials', { username: dataForm.username, password: dataForm.password })
				callNotification({ message: 'Login successfully', type: 'success', status: 200 })
			}
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
			<Formik
				initialValues={{
					name: '',
					email: '',
					username: '',
					password: '',
					confirmPassword: '',
				}}
				validationSchema={signUpSchema}
				onSubmit={async (values, actions) => {
					console.log(actions)

					await handleSignUp(values)
				}}
			>
				{({ handleSubmit, handleChange, handleBlur, values, errors }) => (
					<Form onSubmit={handleSubmit}>
						<Paper withBorder shadow="md" p={30} mt={30} radius="md">
							<TextInput
								label="Username"
								name="username"
								placeholder="Username"
								error={errors.username}
								value={values.username}
								onChange={handleChange}
								onBlur={handleBlur}
								required
								mt="md"
							/>
							<TextInput
								label="Email"
								name="email"
								placeholder="you@randomnconvert.dev"
								value={values.email}
								error={errors.email}
								onChange={handleChange}
								onBlur={handleBlur}
								required
								mt="md"
							/>
							<TextInput
								label="Name"
								name="name"
								placeholder="name"
								value={values.name}
								error={errors.name}
								onChange={handleChange}
								onBlur={handleBlur}
								required
								mt="md"
							/>
							<PasswordInput
								label="Password"
								name="password"
								placeholder="password"
								value={values.password}
								error={errors.password}
								onChange={handleChange}
								onBlur={handleBlur}
								required
								mt="md"
							/>
							<PasswordInput
								label="ConfirmPassword"
								name="confirmPassword"
								placeholder="confirm password"
								value={values.confirmPassword}
								error={errors.confirmPassword}
								onChange={handleChange}
								onBlur={handleBlur}
								required
								mt="md"
							/>
							<Group position="apart" mt="lg" sx={{ display: 'flex', justifyContent: 'end' }}>
								<Link href={'/auth/signin'}>
									<Text color="dimmed" size="sm" align="center" mt={5}>
										Sign in?
									</Text>{' '}
								</Link>
							</Group>
							<Button fullWidth mt="xl" type="submit">
								Sign up
							</Button>
						</Paper>
					</Form>
				)}
			</Formik>
		</Container>
	)
}

export default SignUpContainer
