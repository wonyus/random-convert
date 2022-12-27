import { showNotification } from '@mantine/notifications'
import { useMemo } from 'react'

interface NotificationProps {
	status: StatusType
	title?: string
	message: string
	type: NotiType
}

type NotiType = 'error' | 'success'
type StatusType = 200 | 201 | 204 | 400 | 401 | 404 | 500 | 502 | 504

export const useNotifications = () => {
	const notiTypes = useMemo(
		() => ({
			error: {
				color: 'red',
				title: 'Someting went wrong',
			},
			success: {
				color: 'green',
				title: 'Done',
			},
		}),
		[],
	)

	const callNotification = ({ title, message, type }: NotificationProps) => {
		const props = notiTypes[type]
		showNotification({
			title: title ?? props.title,
			message: message,
			color: props.color,
			autoClose: true,
		})
	}

	return { callNotification }
}

export default useNotifications
