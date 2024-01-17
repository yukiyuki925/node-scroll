## 概要
node.jsを使用したスクレイピングツール。  
コードの構成は坂道系アイドルのブログのスクレイピング特化。今回は櫻坂46で検証。

##使用方法

```
git clone git@github.com:yukiyuki925/node-scroll.git
↓
cd node-scroll
↓
npm run dev
```
npm run dev でツール起動、スクレイピングを行い、csvファイルに書き込む。

## 留意点

inde.jsにおいて、

```
const urls = [
    "https://sakurazaka46.com/s/s46/diary/blog/list?ima=0000&ct=67",
    "https://sakurazaka46.com/s/s46/diary/blog/list?ima=0000&page=1&ct=67&cd=blog",
    "https://sakurazaka46.com/s/s46/diary/blog/list?ima=0000&page=2&ct=67&cd=blog",
  ];
```
の部分を収集したいブログのURLに変更する。
ネットワークの接続が悪かったりすると、スクレイピング中にタイムアウトになったりするので、ご留意ください。
