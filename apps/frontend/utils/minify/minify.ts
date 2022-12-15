import * as Terser from 'terser'

const minifyJS = async (js: string, options: Terser.MinifyOptions) => {
	// Minify the JavaScript code using UglifyJS
	const minified: any = await Terser.minify(js, options)
	if (minified.error) {
		// Handle error
		throw minified.error
	}
	return minified.code
}

const minifyTS = async (ts: string, options: Terser.MinifyOptions) => {
	// Minify the TypeScript code using terser
	const minified: any = await Terser.minify(ts, options)
	if (minified.error) {
		// Handle error
		throw minified.error
	}
	return minified.code
}

const minifyHTML = async (html: string, options: Terser.MinifyOptions) => {
	// Minify the HTML code using html-minifier
	const minified: any = await Terser.minify(html, options)
	if (minified.error) {
		// Handle error
		throw minified.error
	}
	return minified.code
}

const minifyCSS = async (css: string, options: Terser.MinifyOptions) => {
	// Minify the CSS code
	const minified: any = await Terser.minify(css, options)
	if (minified.error) {
		// Handle error
		throw minified.error
	}
	return minified.code
}

export const minify = (content: string, type: 'js' | 'html' | 'css' | 'ts', options: any) => {
	// Minify the code based on the file type
	switch (type) {
		case 'js':
			return minifyJS(content, options)
		case 'html':
			return minifyHTML(content, options)
		case 'css':
			return minifyCSS(content, options)
		case 'ts':
			return minifyTS(content, options)
		default:
			throw new Error(`Unsupported file type: ${type}`)
	}
}
