import { ChangeEvent, FC } from 'react'
import { useState, useRef } from 'react'
import { Prism } from '@mantine/prism'
import { Loader, Button, Container, SimpleGrid, Textarea, ScrollArea, CopyButton } from '@mantine/core'
import useNotifications from '../../hooks/useNotifications'
import { minifiedCSS } from '../../utils/minify'

const MinifyCSSContainer: FC = () => {
	const timeoutRef = useRef<number>(-1)
	const [value, setValue] = useState<any>('')
	const [minify, setMinify] = useState<any>('<minifyCSS>minifyCSS</minifyCSS>')
	const [loading, setLoading] = useState<true | false>(false)

	const { callNotification } = useNotifications()

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		window.clearTimeout(timeoutRef.current)

		setValue(event.target.value)
		setLoading(true)
		timeoutRef.current = window.setTimeout(() => {
			setLoading(false)
		}, 1000)
	}

	const handleClick = async (e: any) => {
		try {
			const data: string = `${value}`
			const result: string | undefined = await Promise.resolve(minifiedCSS(data))
			console.log(result)
			setMinify(result)
			callNotification({ message: 'Minify successfully', type: 'success', status: 200 })
		} catch (err: any) {
			callNotification({ message: err.message, type: 'error', status: 401 })
		}
	}

	return (
		<>
			<Container my="md">
				<SimpleGrid cols={1} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
					<Textarea
						value={value}
						onChange={handleChange}
						rightSection={loading ? <Loader size={16} /> : null}
						label="Minify CSS"
						placeholder="Paste code here"
						radius="md"
						minRows={10}
						maxRows={10}
					/>
					<ScrollArea sx={{ minHeight: 10, maxHeight: 300 }}>
						{value !== '' ? (
							<Prism colorScheme="light" language="css" radius="md" withLineNumbers={true} noCopy={true}>
								{value}
							</Prism>
						) : null}
					</ScrollArea>
					<Button onClick={(evt) => handleClick(evt)} component="a" size="lg">
						Minify CSS
					</Button>
					<ScrollArea>
						<Prism colorScheme="light" language="css" radius="md" noCopy={true}>
							{minify}
						</Prism>
					</ScrollArea>
					<CopyButton value={minify}>
						{({ copied, copy }) => (
							<Button color={copied ? 'teal' : 'blue'} onClick={copy} sx={{ width: 200 }}>
								{copied ? 'Copy code to clipboard' : 'Code copied to clipboard'}
							</Button>
						)}
					</CopyButton>
				</SimpleGrid>
			</Container>
		</>
	)
}

export default MinifyCSSContainer
