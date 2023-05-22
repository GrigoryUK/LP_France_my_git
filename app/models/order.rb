class Order < ApplicationRecord
  validates :email, presence: true
  validates :city, presence: true
end
