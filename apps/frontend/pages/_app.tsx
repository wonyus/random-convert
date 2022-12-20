import App, { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { Provider } from 'jotai'
import NavigatorCustom from '../components/NavigatorCustom'
import { SessionProvider } from 'next-auth/react'
import '../Styles/Content.scss'
export default function MyApp(props: AppProps) {
	const {
		Component,
		pageProps: { session, ...pageProps },
	} = props
	
	return (
		<>
			<Head>
				<title>randomNconvert</title>
				<link rel="icon" href="icon/logo.ico" />
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
			</Head>
			<Provider>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						colorScheme: 'light',
						cursorType: 'default',
						primaryColor: 'red',
						primaryShade: 6,
						defaultRadius: 'sm',
						defaultGradient: {
							from: 'orange',
							to: '#EF4F4E',
							deg: 45,
						},
					}}
				>
					<NotificationsProvider>
						<SessionProvider session={session}>
							<NavigatorCustom />
							<Component {...pageProps} />
						</SessionProvider>
					</NotificationsProvider>
				</MantineProvider>
			</Provider>
		</>
	)
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext)
	return { ...appProps }
}
