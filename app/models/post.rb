class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  validates :content, presence: true, unless: :image?
  mount_uploader :image, ImageUploader

  def self.search(search) #self.はUser.を意味する
    if search
      where(['area LIKE ?', "%#{search}%"]) #検索とuseanameの部分一致を表示。
    else
      all #全て表示させる
    end
  end
end
