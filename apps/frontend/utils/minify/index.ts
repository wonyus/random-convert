import { minify } from 'terser'

const options = {
	html: {
		removeAttributeQuotes: false,
		removeOptionalTags: false,
	},
	js: {
		sourceMap: true,
	},
}

export const miniJS = async (params: string) => {
	try {
		let result = await minify(params)
		console.log(result.code)
		return result.code
	} catch (error: any) {
		throw new Error(error);
	}
}
