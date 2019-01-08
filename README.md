# develop-template

## 概要
* CSS設計はSMACCSを採用
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
# 全ビルド
npm run all_both

# PC、SPそれぞれで全ビルド
npm run all_[pc/sp]

# src内のhtmlをdestにコピー
npm run html_[pc/sp]

# src内のejsをdestにビルド
npm run ejs_[pc/sp]

# src/[pc or sp]/img内のファイルをdestにコピー
npm run img_[pc/sp]

# src/[pc or sp]/css内のファイルをdestにビルド
npm run css_[pc/sp]

# src/[pc or sp]/js内のファイルをdestにビルド
npm run js_[pc/sp]

# src/[pc or sp]/lib内のファイルをdestにコピー
npm run lib_[pc/sp]

# src/[pc or sp]/font内のファイルをdestにコピー
npm run font_[pc/sp]

# src/[pc or sp]内のhtml、ejs、css、jsファイルを監視して変更があればdestにビルド、またはコピー
npm run watch_[pc/sp]

# src/[pc or sp]/js内のファイルに対してlintを実行
npm run lint_[pc/sp]

# src/[pc or sp]内のhtml、ejs、css、jsファイルを監視＆ローカルサーバを起動する
npm run start_[pc/sp]

# destをルートとするローカルサーバを起動する
npm run server

# 全てのJSファイルに対して整形を実行する
npm run fix
```
