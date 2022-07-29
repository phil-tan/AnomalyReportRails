class Site < ApplicationRecord
  has_many :buildings
  def charts
    Chart.where(parent_type: 'site').where("parent_id = ?", id)
  end
end
