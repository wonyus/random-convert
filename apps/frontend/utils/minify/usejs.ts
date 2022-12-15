import { minify } from './minify'

const options = {
	ecma: 6,
}

export const minifiedJS = (content: string) => {
	const minjs = minify(content, 'js', options)
	return minjs
}
