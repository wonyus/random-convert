import { minify } from './minify'

const options = {
	minifyCSS: true,
}

export const minifiedHTML = (content: string) => {
	const minhtml = minify(content, 'html', options)
	return minhtml
}
