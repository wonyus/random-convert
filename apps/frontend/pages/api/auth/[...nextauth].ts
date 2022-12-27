import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { randomBytes, randomUUID } from 'crypto'
import { logIn, refresh } from '../../../service/request'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

async function refreshAccessToken(token: any) {
	console.log('refreshAccessToken')

	try {
		const response = await refresh(
			{
				Authorization: `Bearer ${token.tokens.refreshToken}`,
			},
			{},
		)

		if (!response) {
			throw new Error()
		}
		const tokenData: any = jwt_decode(response.accessToken)

		return {
			...token,
			tokens: { ...response },
			accessTokenExpires: tokenData.exp,
		}
	} catch (error) {
		return {
			...token,
			error: 'RefreshAccessTokenError',
		}
	}
}

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60, // 30 days
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
					return response
				} else {
					return null
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			return true
		},
		async redirect({ url, baseUrl }) {
			return baseUrl
		},
		async jwt({ token, user }) {
			console.log('jwt')

			if (user) {
				const tokenData: any = jwt_decode(user.tokens?.accessToken)
				// if Expire
				token.accessTokenExpires = tokenData.exp
				token.tokens = user.tokens
				token.role = 'user'
			}

			const token_str: any = token.accessTokenExpires
			if (dayjs.unix(token_str).diff(dayjs()) > 1) {
				return token
			}

			return refreshAccessToken(token)
		},
		async session({ session, token, user }) {
			console.log('session')

			if (token?.tokens) {
				session.tokens = token.tokens
				session.role = 'user'
			}
			return session
		},
	},
}

export default NextAuth(authOptions)
