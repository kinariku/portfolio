import { build } from 'esbuild'

await build({
  entryPoints: ['src/main.ts'],
  outfile: 'public/assets/app-fallback.js',
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: ['es2018'],
  minify: true,
  sourcemap: false,
  loader: {
    '.ts': 'ts',
    '.css': 'empty'
  },
  supported: {
    'import-meta': true
  },
  logLevel: 'info'
})
