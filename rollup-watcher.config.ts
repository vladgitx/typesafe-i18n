import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import externals from 'rollup-plugin-node-externals'
import commonjs from '@rollup/plugin-commonjs'
import stripCode from 'rollup-plugin-strip-code'

const config = [
	{
		input: './src/node-watcher.ts',
		output: [
			{
				file: 'node/watcher.js',
				format: 'cjs',
				sourcemap: true,
			},
		],
		plugins: [
			stripCode({
				start_comment: 'optimize-start',
				end_comment: 'optimize-end',
			}),
			resolve({ preferBuiltins: true }),
			commonjs(),
			externals(),
			typescript(),
		],
	},
]

export default config
