require 'date'

class BuildingsController < ApplicationController
  def index
  end

  def show
    @building = Building.find(params[:id])
    @building_charts = @building.charts
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def report
  end

  def send_data
    building = Building.find(params[:id])
    table = CSV.read("app/assets/datasets/site_#{building.site_id}_energy.csv", headers: true, converters: :numeric)
    table = table.select {|row| Date.parse(row.to_h['dt']) < Date.parse('2018-01-01')}
    table_by_cols = {}
    table.each do |row|
      row.each do |el|
        if table_by_cols.key? el[0]
          table_by_cols[el[0]] << el[1]
        else
          table_by_cols[el[0]] = [el[1]]
        end
      end
    end
    render json: building.charts_data(table_by_cols)
  end
end
