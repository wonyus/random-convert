import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
	interface Session {
		[key: string]: any
		refreshTokenExpires?: number
		accessTokenExpires?: string
		refreshToken?: string
		token?: string
		error?: string
		user?: User
	}

	interface User {
		[key: string]: any
		username?: string
		email?: string
		name?: string
		id?: string
		role?: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		refreshTokenExpires?: number
		accessTokenExpires?: number
		refreshToken?: string
		token: string
		exp?: number
		iat?: number
		jti?: string
	}
}
