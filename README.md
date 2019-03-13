# develop-template

## プレビュー

## 概要
* CSS設計はSMACCSを採用
* srcのファイルをdestにコンパイル
* htmlはejsで管理
  * ルート直下のincludeフォルダに共通パーツを格納
* ```console.log```はデバッグ時に残ってしまうことが多いので、eslintのエラールールとして追加
* classをHTML側でインスタンス化している場合、eslintのno-unused-varsに引っかかってしまうので、```// eslint-disable-next-line```を使ってeslintのチェックから除外する

## サポート環境
```package.json```の```browserslist```に定義。
### PC
 * 以下の直近2バージョン
   * Edge最新
   * Firefox最新
   * Chrome最新
   * Safari最新
 * IE11以上
### SP
 * iOS8以上
 * Android4.4以上

## 階層定義
gulpタスク、EJSそれぞれのconfigファイルに定義しています。
ディレクトリ構成の変更がある場合は以下2ファイルの修正が必要です。
```
/gulp/config/config.js
/src/common/include/_config.ejs
```

## コマンド
```bash
# 全ビルド
npm run all_both

# PC、SPそれぞれで全ビルド
npm run all[_sp]

# src内のhtmlをdestにコピー
npm run html[_sp]

# src内のejsをdestにビルド
npm run ejs[_sp]

# src/[pc or sp]/img内のファイルをdestにコピー
npm run img[_sp]

# src/[pc or sp]/css内のファイルをdestにビルド
npm run css[_sp]

# src/[pc or sp]/js内のファイルをdestにビルド（圧縮なし）
npm run js[_sp]

# src/[pc or sp]/js内のファイルをdestにビルド（圧縮）
# ※devでビルドした場合にブラウザで謎のスクリプトエラーが発生する事があります。
# 通常は使わないほうが良いかも。
npm run js_dev[_sp]

# src/[pc or sp]/lib内のファイルをdestにコピー
npm run lib[_sp]

# src/[pc or sp]/font内のファイルをdestにコピー
npm run font[_sp]

# src/[pc or sp]内のhtml、ejs、css、jsファイルを監視して変更があればdestにビルド、またはコピー
npm run watch[_sp]

# src/[pc or sp]/js内のファイルに対してlintを実行
npm run lint[_sp]

# src/[pc or sp]内のhtml、ejs、css、jsファイルを監視＆ローカルサーバを起動する
npm run start[_sp]

# destをルートとするローカルサーバを起動する
npm run server
```
