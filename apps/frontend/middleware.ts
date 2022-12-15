import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
	// `withAuth` augments your `Request` with the user's token.
	function middleware(req) {
		console.log(req.nextauth.token, 'token')
		return NextResponse.rewrite(new URL('/admin', req.url))
	},
	{
		callbacks: {
			authorized: ({ token }) => {
				return token?.role === 'admin'
			},
		},
	},
)

export const config = { matcher: ['/admin'] }
