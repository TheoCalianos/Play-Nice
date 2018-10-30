class Group < ApplicationRecord
  validates :location, presence: true
  validates :title, presence: true
  validates :description, presence: true
  validates :game, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :donated_amount, presence: true

  has_many :sponsers
  has_many :charities, through: :sponsers
  has_many :users
end
