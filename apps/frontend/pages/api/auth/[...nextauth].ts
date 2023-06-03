import type { NextAuthOptions, Session, User } from 'next-auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { randomBytes, randomUUID } from 'crypto'
import { logIn, getNewtoken } from '../../../service/request'
import { JWT } from 'next-auth/jwt'
import dayjs from 'dayjs'

export const session = ({ session, token }: { session: Session; token: JWT }): Promise<Session> => {
	const accessTokenExpires = token?.accessTokenExpires as number

	if (
		Date.now() / 1000 > accessTokenExpires &&
		token?.refreshTokenExpires &&
		Date.now() / 1000 > token?.refreshTokenExpires
	) {
		return Promise.reject({
			error: new Error('Refresh token has expired. Please log in again to get a new refresh token.'),
		})
	}

	const temp_token = token?.AccessToken as any

	const accessTokenData = JSON.parse(atob(temp_token.split('.').at(1)))
	session.user = token as any

	token.accessTokenExpires = accessTokenData.exp

	session.token = token?.token

	return Promise.resolve(session)
}
export const jwt = async ({ token, user }: { token: JWT; user?: User }) => {
	if (user?.email) {
		return { ...token, ...user }
	}

	// on subsequent calls, token is provided and we need to check if it's expired
	if (token?.accessTokenExpires) {
		if (Date.now() / 1000 < token?.accessTokenExpires) return { ...token, ...user }
	} else if (token?.refreshToken) return getNewtoken({}, token)

	return { ...token, ...user }
}

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60, // 30 days
		updateAge: 24 * 60 * 60, // 24 hours
		generateSessionToken: () => {
			return randomUUID?.() ?? randomBytes(32).toString('hex')
		},
	},
	pages: {
		signIn: '/auth/signin',
		signOut: '/auth/signout',
		error: '/auth/error',
		verifyRequest: '/auth/verify-request',
		newUser: '/auth/new-user',
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {},

			async authorize(credentials, req) {
				const response = await logIn({}, credentials)

				if (response) {
					return response.message
				}
				return Promise.reject(new Error(response?.errors))
			},
		}),
	],
	callbacks: {
		async redirect({ url, baseUrl }) {
			return baseUrl
		},
		session,
		jwt,
	},
}

export default NextAuth(authOptions)
