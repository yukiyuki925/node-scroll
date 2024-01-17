## 概要

node.js を使用したスクレイピングツール。  
コードの構成は坂道系アイドルのブログのスクレイピング特化。今回は櫻坂 46 で検証。

##使用方法

```
git clone git@github.com:yukiyuki925/node-scroll.git
↓
cd node-scroll
↓
npm run dev
```

npm run dev でツール起動、スクレイピングを行い、csv ファイルに書き込む。

## 留意点

index.js において、

```
const urls = [
    "https://sakurazaka46.com/s/s46/diary/blog/list?ima=0000&ct=67",
    "https://sakurazaka46.com/s/s46/diary/blog/list?ima=0000&page=1&ct=67&cd=blog",
    "https://sakurazaka46.com/s/s46/diary/blog/list?ima=0000&page=2&ct=67&cd=blog",
  ];
```

の部分を収集したいブログの URL に変更する。

ネットワークの接続が悪かったりすると、スクレイピング中にタイムアウトになったりするのでご留意ください。
