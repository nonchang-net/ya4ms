# Ya4ms

![wipです](https://user-images.githubusercontent.com/30385722/56750868-acfa2580-67bf-11e9-83c3-7fe068a92a1a.png)

- サンプル（まだ特に動作していません）
	- https://nonchang-net.github.io/Ya4ms/

- 諸々TODOですがとりあえずコミット

- vue.tsでなんかやってる感じです。説明は後日。

- なんかできたら成果物のご紹介など書きます



## 運用メモ

- yarn serve
	- 普段の開発

- yarn build
	- 公開ページはgithub pagesをブランチ運用で利用。
	- 成果物作成。distの中はignoreしているので、gh-pagesブランチで直前のコミット上書きし続ける方向で運用中


## 基本設計のメモ

- 実装方針のメモや懸念点などは極力コメントとユニットテストで網羅する
- 大枠はここで検討

- 20190502木曜日
	- 根本的に4bit丸め処理を網羅しなくていいのかどうか不安になってきた
		- TSでは基本number型で扱うしかないので、一旦このまま進める
		- 溢れチェックが適切なら不具合は発生せず、ユニットテストで検出できるはずと考えた。
		- やばそうなら何か考える。他のCPUシミュ系コードがどう扱っているのかも調べてみる。


## TODO

- `実装`
	- まずは内部状態の簡単な設計。
		- テンキークリックしたらイベント飛ばして、マシンの内部状態評価の形でLEDを変更する。

- `環境検討` github pagesだと一時間あたり10回更新制限のためiOS確認が面倒かも。個人AWS S3へのデプロイスクリプトを用意してみるか？
	- ローカルホスト接続＋定期的なデプロイでいいかなぁ。出先で更新するわけでもないし。。

`eof`
