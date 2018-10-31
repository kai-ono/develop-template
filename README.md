# develop-template

## 概要
* srcのファイルをdestにコンパイル
* htmlはejsで管理
  * ルート直下のincludeフォルダに共通パーツを格納

## サポート環境
### PC
 * IE11
 * Edge最新
 * Firefox最新
 * Chrome最新
 * Safari最新
### SP
 * iOS8以上
 * Android4.4以上

## コマンド
```bash
# gulp all
  # 次のタスクを実行（順番は保証されない） → 'html', 'ejs', 'img', 'css', 'js', 'font'
$ npm run all_both
$ npm run all_pc
$ npm run all_sp

# gulp html
  # src配下のhtmlをdest配下にコピーする
$ npm run html_pc
$ npm run html_sp

# gulp ejs
  # src配下のejsをhtmlにコンパイルしてdest配下に出力する
$ npm run ejs_pc
$ npm run ejs_sp

# gulp img
  # src/img配下の画像をdest/img配下にコピーする
$ npm run img_pc
$ npm run img_sp

# gulp css
  # src/css配下のscssをコンパイルしてdest/css配下に出力する
$ npm run css_pc
$ npm run css_sp

# gulp js
  # src/js配下のjsをUMD形式のes2015にトランスパイルしてdest/js配下に出力する
$ npm run js_pc
$ npm run js_sp

# gulp lib
  # src/lib配下のファイルやフォルダ（プラグインやjqueryなど）をdest/lib配下にコピーする
  # ※ browserifyを使っていないのでnpmモジュールとしては読み込めない
  # ※ HTTP/2サーバーの場合、別ファイルの方が表示速度が早くなるので結合はしていない
  # browserifyを使うか否かのビルド方式に関してはissue#1参照
$ npm run lib_pc
$ npm run lib_sp

# gulp font
  # src/font配下のフォントファイルをdest/font配下にコピーする
$ npm run font_pc
$ npm run font_sp

# gulp server
  # ローカルサーバを立ち上げる
$ npm run server

# gulp watch
  # html、ejs、scss、jsを監視して、変更があれば次のタスクをそれぞれ実行する → 'html', 'ejs', 'css', 'js'
$ npm run watch_pc
$ npm run watch_sp

# gulp
  # watchとserverを実行する
$ npm run start_pc
$ npm run start_sp

# gulp eslint
  # src/js配下のjsファイルのlintを行う
$ npm run lint_pc
$ npm run lint_sp

# standard --fix
  # JS自動整形 https://www.npmjs.com/package/standard
$ npm run fix
```