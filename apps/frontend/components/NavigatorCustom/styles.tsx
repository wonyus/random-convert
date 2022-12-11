import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme, _params, getRef) => {
	const icon = getRef('icon')

	return {
		navbar: {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		},
		navbarsection: {
			position: 'fixed',
			[theme.fn.smallerThan('sm')]: {
				display: 'none',
			},
		},

		title: {
			textTransform: 'uppercase',
			letterSpacing: -0.25,
		},

		linkdrawer: {
			...theme.fn.focusStyles(),
			display: 'flex',
			alignItems: 'center',
			textDecoration: 'none',
			fontSize: theme.fontSizes.sm,
			color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			borderRadius: theme.radius.sm,
			fontWeight: 500,

			'&:hover': {
				backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
				color: theme.colorScheme === 'dark' ? theme.white : theme.black,

				[`& .${icon}`]: {
					color: theme.colorScheme === 'dark' ? theme.white : theme.black,
				},
			},
		},

		linkIcon: {
			ref: icon,
			color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
			marginRight: theme.spacing.sm,
		},

		linkActive: {
			'&, &:hover': {
				backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
				color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
				[`& .${icon}`]: {
					color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
				},
			},
		},

		footer: {
			borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
			paddingTop: theme.spacing.md,
		},
		link: {
			width: 50,
			height: 50,
			borderRadius: theme.radius.md,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

			'&:hover': {
				backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
			},
		},

		active: {
			'&, &:hover': {
				backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
				color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
			},
		},
		dropdownlink: {
			display: 'contents',
			textDecoration: 'none',
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		},
		headerlink: {
			display: 'flex',
			alignItems: 'center',
			height: '100%',
			paddingLeft: theme.spacing.md,
			paddingRight: theme.spacing.md,
			textDecoration: 'none',
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
			fontWeight: 500,
			fontSize: theme.fontSizes.sm,

			[theme.fn.smallerThan('sm')]: {
				height: 42,
				display: 'flex',
				alignItems: 'center',
				width: '100%',
			},

			...theme.fn.hover({
				backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
			}),
		},

		headersubLink: {
			width: '100%',
			padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
			borderRadius: theme.radius.md,

			...theme.fn.hover({
				backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
			}),

			'&:active': theme.activeStyles,
		},

		headerdropdownFooter: {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
			margin: -theme.spacing.md,
			marginTop: theme.spacing.sm,
			padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
			paddingBottom: theme.spacing.xl,
			borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
		},

		headerhiddenMobile: {
			[theme.fn.smallerThan('sm')]: {
				display: 'none',
			},
		},

		headerhiddenDesktop: {
			[theme.fn.largerThan('sm')]: {
				display: 'none',
			},
		},
	}
})
