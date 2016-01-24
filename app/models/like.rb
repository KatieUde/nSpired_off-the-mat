class Like < ActiveRecord::Base
  belongs_to :user
  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true
  validates :quote_content, presence: true
  validates :quote_author, presence: true
end
