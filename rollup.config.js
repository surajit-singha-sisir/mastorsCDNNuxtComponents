import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/index.mjs',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      vue({
        target: 'browser',
        preprocessStyles: true,
        // Ensure TypeScript is processed in <script lang="ts">
        compileTemplate: true,
        template: {
          isProduction: false // For development source maps
        },
        // Pass TypeScript processing to @rollup/plugin-typescript
        needMap: true
      }),
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
        // Exclude .vue files from direct TypeScript processing
        exclude: ['**/*.vue'],
        // Include TypeScript files
        include: ['**/*.ts']
      })
    ],
    external: ['vue', '@nuxt/kit']
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
]