require 'csv'

class Site < ApplicationRecord
  has_many :buildings
  def charts
    Chart.where(parent_type: 'site').where("parent_id = ?", id)
  end

  def points_list
    CSV.open("app/assets/datasets/site_#{id}_energy.csv", 'r') { |csv| csv.first }
  end
end
