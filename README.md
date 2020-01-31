# 防災くん（災害情報共有）

## 概要
このアプリは災害情報をみんなで共有することができるアプリです。具体的にはテキスト、画像を投稿することができます。また投稿内容に対してコメントすることも可能です。
URL https://bosaikun.herokuapp.com/
テストアカウント
Name テストくん、 Email test@mail、 Password test123
## 制作背景
このアプリを作り始める数ヶ月前に台風があったため作ってみようと思った。

## 工夫したポイント
投稿フォームはJavaScriptでモーダルにした。また投稿を送信した後は非同期で投稿が表示されるようにした。都道府県検索で投稿を検索できるようにした。

## 機能説明
![9a0e1a8f862c64fc299bafb187bcc3ed](https://user-images.githubusercontent.com/57382328/73520092-1b060400-4446-11ea-88a0-a6c50fb330d1.jpg)
テキストや画像を投稿して災害情報を共有することができます。

![bc462d0bb8eb1799b102d07953aed08f](https://user-images.githubusercontent.com/57382328/73521484-679f0e80-4449-11ea-97c2-b30d17db8ff9.jpg)
このような投稿フォームになっています。


<img width="1318" alt="34dce514cec38c9c34e105d4cde14381" src="https://user-images.githubusercontent.com/57382328/73521167-aa141b80-4448-11ea-9f8a-c0e2bdd9a0b3.png">
投稿に対してコメントをすることもできます。


## 今後実装したい機能
マイページを作成してユーザーが自分の登録した情報や自分の投稿を編集、削除できるようにしたいです。またマイページでユーザーがプロフィールを載せられるようにするのも面白そうだと思っています。

## 使用技術
HTML,CSS,Ruby,JavaScript

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|

### Association
- has_many :posts
- has_many :comments


## postsテーブル

|Column|Type|Options|
|------|----|-------|
|content|string|
|image|string|
|region|string|null: false|
|user_id|refereces|null: false, foreign_key: true|


### Association
- belongs_to :user
- has_many :comments


## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|user_id|references|null: false, foreign_key: true|
|post_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :post