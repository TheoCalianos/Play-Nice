class Charity < ApplicationRecord
  validates :url, presence: true
  validates :name, presence: true
  validates :description, presence: true
  has_many :sponsers
  has_many :groups, through: :sponsers

end
