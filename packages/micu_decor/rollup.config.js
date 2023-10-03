import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';

export default {
	input: './index.js',
	plugins: [
		babel({
			babelHelpers: 'bundled',
			exclude: 'node_modules/**',
		}),
		postcss({
			config: {
				path: './postcss.config.js',
			},
			extensions: ['.css'],
			minimize: true,
			inject: {
				insertAt: 'top',
			},
		}),
	],
	external: ['react', 'react-dom'],
	output: {
		file: './output.js',
		format: 'esm',
	},
};
