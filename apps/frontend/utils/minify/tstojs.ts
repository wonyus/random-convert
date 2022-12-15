import { exec } from 'child_process'

function convertTypeScriptToJavaScript(tsFilePath: string, jsFilePath: string) {
	const command = `tsc ${tsFilePath} --outFile ${jsFilePath}`
	const options: any = {
		cwd: process.cwd(),
		shell: true,
	}

	return new Promise((resolve, reject) => {
		exec(command, options, (err, stdout, stderr) => {
			if (err) {
				reject(err)
			} else {
				resolve(stdout)
			}
		})
	})
}

convertTypeScriptToJavaScript('your-typescript-file.ts', 'your-javascript-file.js')
	.then((output) => {
		console.log(output)
	})
	.catch((err) => {
		console.error(err)
	})
