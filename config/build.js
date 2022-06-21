const path = require('path')

/**
 * 客户端
 */
require('esbuild')
  .build({
    entryPoints: [path.resolve(__dirname, '../client/index.tsx')],
    outfile: path.resolve(__dirname, '../dist/static/index.js'),
    bundle: true,
    platform: 'browser',
    watch: {
      onRebuild(error) {
        if (error) console.error('client build failed:', error)
        else console.log('client build end')
      },
    },
  })
  .catch(() => process.exit(1))

/**
 * 服务端
 */
require('esbuild')
  .build({
    entryPoints: [path.resolve(__dirname, '../server/index.ts')],
    outfile: path.resolve(__dirname, '../dist/server/index.js'),
    bundle: true,
    format: 'cjs',
    platform: 'node',
    watch: {
      onRebuild(error) {
        if (error) console.error('server build failed:', error)
        else console.log('server build end')
      },
    },
  })
  .catch(() => process.exit(1))
