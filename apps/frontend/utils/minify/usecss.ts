import { minify } from './minify'

const options = {
	minifyCSS: true,
}

export const minifiedCSS = (content: string) => {
	const mincss = minify(content, 'css', options)
	return mincss
}
