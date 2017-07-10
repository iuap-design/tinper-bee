import babel from 'rollup-plugin-babel'

export default {
entry: 'index.js',
dest: './dist/js/tinper-bee.js',
format: 'iife',
sourceMap: 'inline',
plugins: [
	babel({
		exclude: 'node_modules/**',
	}),
	],
}
