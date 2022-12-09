import { showNotification } from '@mantine/notifications'
import { useMemo } from 'react'

interface NotificationProps {
	title?: string
	message: string
    type: NotiType
}

type NotiType = 'error' | 'success'

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
			}
		}),
		[],
	)

	const callNotification = ({ title, message, type }: NotificationProps ) => {
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