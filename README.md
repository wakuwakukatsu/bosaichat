# 防災くん（災害情報共有）

## 防災くんを作成した経緯
私は初めてオリジナルのアプリを作成するので、どういうアプリを作るかよりも1つのアプリを形にすることを目標にしてこのアプリを作成しました。

## アプリの機能


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