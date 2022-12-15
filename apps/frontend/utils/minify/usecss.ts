import { minify } from './minify'

const options = {
	minifyCSS: true,
	removeComments: true,
	removeEmptyAttributes: true,
	removeEmptyElements: true,
	removeOptionalTags: true,
	removeStyleLinkTypeAttributes: true,
	removeTagWhitespace: true,
	maxLineLength: 500,
	noNewlinesBeforeTagClose: true,
	removeAttributeQuotes: true,
	collapseWhitespace: true,
	collapseInlineTagWhitespace: true,
	collapseBooleanAttributes: true,
}

export const minifiedCSS = (content: string) => {
	const mincss = minify(content, 'css', options)
	return mincss
}
