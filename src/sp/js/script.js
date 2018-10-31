'use strict'

class Sample {
  /**
     * コンストラクタ
     * @param {Object} args object型の引数。
     */
  constructor (args) {
    this.Sample()
  }

  Sample () {
    console.log('sample')
  }
}

module.exports = Sample
if (typeof window !== 'undefined') {
  !window.Sample && (window.Sample = Sample)
}
