import { Box, CopyButton, Grid, InputBase, Select, Tooltip } from '@mantine/core'
import { IconClipboardCopy } from '@tabler/icons'
import { atom, useAtom } from 'jotai'
import { FC } from 'react'
import { convertMetric } from '../../service/request'
import { metricUnit } from '../../constant/metricUnit'

type MetricType = { value: string; unit: string }

type formData = {
	value: string | null
	unit: string
}

const fromMetricAtom = atom<formData>({ value: null, unit: 'm' })
const toMetricAtom = atom<formData>({ value: null, unit: 'in' })
const ConvertMetric: FC = () => {
	const [from, setFrom] = useAtom(fromMetricAtom)
	const [to, setTo] = useAtom(toMetricAtom)

	const handleValueChange = async (source: string, value: string | null, type: string) => {
		if (type === 'value' && Number.isNaN(Number(value))) {
			return
		}
		const checkType = (val: formData) => {
			if (type === 'value' && value !== null) {
				val.value = value.length > 0 ? value : null
			} else {
				val.unit = String(value)
			}
			return val
		}

		if (source === 'from') {
			const data: formData = checkType({ value: from.value, unit: from.unit })
			setFrom(data)
			if (data.value !== null && data.unit !== null) {
				const res = await convertMetric({}, data)
				setTo((prev) => {
					return { value: res[to.unit], unit: prev.unit }
				})
			}
		} else {
			const data: formData = checkType({ value: to.value, unit: to.unit })
			setTo(data)
			if (data.value !== null && data.unit !== null) {
				const res = await convertMetric({}, data)
				setFrom((prev) => {
					return { value: res[from.unit], unit: prev.unit }
				})
			}
		}
	}

	return (
		<>
			<Grid gutter="sm" justify="center" sx={{ paddingTop: 20 }}>
				<Grid.Col span={6}>
					<Box sx={{ display: 'flex', direction: 'ltr', alignItems: 'flex-end', justifyContent: 'center' }}>
						<InputBase
							value={from.value == null ? '' : from.value}
							onChange={(e) => handleValueChange('from', e.target.value, 'value')}
							label="from"
							miw={300}
							maw={500}
							sx={{ input: { height: '4rem' } }}
							rightSection={
								<CopyButton value={from.value == null ? '' : from.value}>
									{({ copied, copy }) => (
										<Tooltip
											label="Coppy"
											position="top"
											color={copied ? 'teal' : 'blue'}
											onClick={copy}
										>
											<div>
												<IconClipboardCopy
													size="1rem"
													style={{ display: 'block', opacity: 0.5 }}
												/>
											</div>
										</Tooltip>
									)}
								</CopyButton>
							}
						/>
						<Select
							searchable
							miw={200}
							defaultValue="m"
							nothingFound="No options"
							withinPortal
							styles={(theme) => ({
								item: {
									'&[data-selected]': {
										'&, &:hover': {
											backgroundColor:
												theme.colorScheme === 'dark'
													? theme.colors.teal[9]
													: theme.colors.teal[1],
											color: theme.colorScheme === 'dark' ? theme.white : theme.colors.teal[9],
										},
									},
									'&[data-hovered]': {},
								},
							})}
							sx={{ input: { height: '4rem' } }}
							placeholder="Pick one"
							data={metricUnit}
							onChange={(e) => handleValueChange('from', e, 'unit')}
						/>
					</Box>
				</Grid.Col>
				<Grid.Col span={6}>
					<Box maw={'auto'} mx="auto" sx={{ display: 'flex', direction: 'ltr', alignItems: 'flex-end' }}>
						<InputBase
							value={to.value == null ? '' : to.value}
							onChange={(e) => handleValueChange('to', e.target.value, 'value')}
							label="to"
							miw={300}
							maw={500}
							sx={{ input: { height: '4rem' } }}
							rightSection={
								<CopyButton value={to.value == null ? '' : to.value}>
									{({ copied, copy }) => (
										<Tooltip
											label="Coppy"
											position="top"
											color={copied ? 'teal' : 'blue'}
											onClick={copy}
										>
											<div>
												<IconClipboardCopy
													size="1rem"
													style={{ display: 'block', opacity: 0.5 }}
												/>
											</div>
										</Tooltip>
									)}
								</CopyButton>
							}
						/>
						<Select
							searchable
							miw={200}
							defaultValue="in"
							nothingFound="No options"
							withinPortal
							styles={(theme) => ({
								item: {
									'&[data-selected]': {
										'&, &:hover': {
											backgroundColor:
												theme.colorScheme === 'dark'
													? theme.colors.teal[9]
													: theme.colors.teal[1],
											color: theme.colorScheme === 'dark' ? theme.white : theme.colors.teal[9],
										},
									},
									'&[data-hovered]': {},
								},
							})}
							sx={{ input: { height: '4rem' } }}
							placeholder="Pick one"
							data={metricUnit}
							onChange={(e) => handleValueChange('to', e, 'unit')}
						/>
					</Box>
				</Grid.Col>
			</Grid>
		</>
	)
}

export default ConvertMetric
