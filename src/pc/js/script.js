'use strict'

// 別ファイルから読み込めるので、複雑なクラスはファイルを分けると見通しが良くなります。
require('./ua-switch.js')

// 別ファイルでクラスを実行する場合はLintに引っかかるので、その場合はclassの行だけLintを無効にする
// eslint-disable-next-line
class Sample {
  /**
   * コンストラクタ
   * @param {Object} args object型の引数。
   */
  constructor (args) {
    this.args = (typeof args !== 'undefined') ? args : {}
    this.jsonPath = (typeof this.args.json !== 'undefined') ? this.args.json : ''
  }

  getJson () {
    fetch(this.jsonPath)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error()
        }
      })
      .then((text) => console.log(text.key))
      .catch((error) => console.log(error))
  }
}

module.exports = Sample
if (typeof window !== 'undefined') {
  !window.Sample && (window.Sample = Sample)
}
