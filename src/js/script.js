'use strict';

// polyfill
const raf = require('raf');
require('es5-shim');
require('classlist-polyfill');

// require
require('./mod/Global');
const sample = require('./mod/Sample');
const test = require('./mod/Test');
const anim = require('./mod/AnimationMod');
const cnt = require('./mod/Counter');

/**
 * Hoge用のクラスです。
 *
 * @memberof Hoge
 * @requires mod/Global
 * @requires Hoge/Fuga/AnimationMod
 */
class Fuga {
  /**
   * コンストラクタ
   * @param {Object} args objectの引数です
   * @param {Element} args.element HTMLの要素を指定します
   */
  constructor(args) {
    this.elm = (typeof args.element !== 'undefined') ? args.element : null;
    this.init();
  }

  /**
   * requireしたモジュールのメソッドを実行
   */
  init() {
    test.add();
    this.insertBr();
    test.remove();
    this.insertBr();
    sample.load();
    this.insertBr();
    anim.add();
    this.insertBr();
    new cnt('body', 10);
    this.insertBr();
  }

  /**
   * 改行要素を作成して返します
   */
  insertBr() {
    const node = document.createElement('br');
    document.body.appendChild(node);
  }

  /**
   * HTMLから呼び出すメソッド
   * @example
   * var _test = new Hoge.Fuga({
   *   element: document.querySelector('.hoge')
   * });
   * _test.public();
   */
  public() {
    const _this = this;
    const textnode = document.createTextNode('public method');
    let n = 0;
    document.body.appendChild(textnode);

    raf(function tick() {
      _this.elm.style.marginLeft = n + 'px';
      n++;
      raf(tick);
    });
  }
};

Hoge.Fuga = Fuga;