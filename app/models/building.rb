class Building < ApplicationRecord
  belongs_to :site
  has_many :charts
end
