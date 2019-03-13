module.exports = (function () {
  const minimist = require('minimist')

  const srcRoot = './src/'
  const destRoot = './dest/'

  const srcPc = srcRoot + 'pc/'
  const srcSp = srcRoot + 'sp/'

  const destPc = destRoot
  const destSp = destRoot + 'sp/'

  this.env = minimist(process.argv.slice(2))
  this.isSp = (this.env.sp)
  this.src = (this.isSp) ? srcSp : srcPc
  this.dest = (this.isSp) ? destSp : destPc

  return this
})()
