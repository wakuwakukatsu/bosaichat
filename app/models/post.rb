class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  validates :content, presence: true, unless: :image?
  mount_uploader :image, ImageUploader
end
