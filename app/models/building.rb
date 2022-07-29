require 'csv'
require 'json'

class Building < ApplicationRecord
  belongs_to :site
  def charts
    Chart.where(parent_type: 'building').where("parent_id = ?", id)
  end

  def charts_data(table)
    # table = CSV.parse(File.read("app/assets/datasets/site_#{site_id}_energy.csv"), headers: true)
    chart_table = {'dt' => table['dt']}
    charts.each do |chart|
      chart.points_array.each do |point|
        chart_table.merge!(point => table[point])
      end
    end
    return chart_table.to_json
  end

  # def charts_with_data(table)
  #   table = Daru::DataFrame.from_csv("app/assets/datasets/site_#{site_id}_energy.csv")
  #   charts_list = []
  #   charts.each do |chart|
  #     chart_hash = chart.as_json
  #     chart_table = chart.data_table(table)
  #     chart_hash['data_x'] = chart_table
  #     p chart_hash['data']
  #     charts_list << chart_hash
  #   end
  #   charts_list.to_json
  # end


end
