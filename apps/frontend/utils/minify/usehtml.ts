import { minify } from './minify'

const options = {
	removeComments: true,
	removeEmptyAttributes: true,
	useShortDoctype: true,
	trimCustomFragments: true,
	removeEmptyElements: true,
	removeOptionalTags: true,
	removeStyleLinkTypeAttributes: true,
	removeTagWhitespace: true,
	maxLineLength: 700,
	noNewlinesBeforeTagClose: true,
	removeAttributeQuotes: true,
	collapseWhitespace: true,
}

export const minifiedHTML = (content: string) => {
	const minhtml = minify(content, 'html', options)
	return minhtml
}
