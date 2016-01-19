class User < ActiveRecord::Base
  validates :name, presence: true, length: { maximum: 75 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
    format: { with: VALID_EMAIL_REGEX },
    # infers uniqueness will be true
    uniqueness: { case_sensitive: false }
end
