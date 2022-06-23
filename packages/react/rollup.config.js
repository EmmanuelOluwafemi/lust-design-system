import Ts from 'rollup-plugin-typescript2'

export default {
    input: [
        'src/index.ts',
        'src/atoms/color/index.ts',
        'src/atoms/text/index.ts',
        'src/atoms/margin/index.ts',
        'src/molecules/select/index.ts'
    ],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true
    },
    plugins: [Ts()],
    preserveModules: true,
    external: ['react', '@lust/foundation']
}