import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { randomBytes, randomUUID } from 'crypto'
import { logIn } from '../../../service/request'

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
		async session({ session, token, user }) {
			if (token?.tokens) {
				session.tokens = token.tokens
				session.role = 'admin'
			}
			return session
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			if (user) {
				token.tokens = user.tokens
				token.role = 'admin'
			}
			return token
		},
	},
}

export default NextAuth(authOptions)
