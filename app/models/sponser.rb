class Sponser < ApplicationRecord
  belongs_to :group
  belongs_to :charity
end
