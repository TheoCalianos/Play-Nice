class Group < ApplicationRecord
  validates :location, presence: true
  validates :title, presence: true
  validates :description, presence: true
  validates :game, presence: true
  validates :time, presence: true
end
