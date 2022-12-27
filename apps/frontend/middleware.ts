import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
	// `withAuth` augments your `Request` with the user's token.
	function middleware(request) {
		// console.log(request.nextauth, 'NextRequest')
		// if (request.nextUrl.pathname.startsWith('/about')) {
		// 	return NextResponse.rewrite(new URL('/about-2', request.url))
		// }

		// if (request.nextUrl.pathname.startsWith('/dashboard')) {
		// 	return NextResponse.rewrite(new URL('/dashboard', request.url))
		// }
		if (request.nextUrl.pathname.startsWith('/admin')) {
			return NextResponse.rewrite(new URL('/admin', request.url))
		}
		return NextResponse.rewrite(new URL('/', request.url))
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
