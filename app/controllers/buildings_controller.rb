require 'date'

class BuildingsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
  end

  def show
    @building = Building.find(params[:id])
    @building_charts = @building.charts
    @building_chart_rows = @building.chart_rows
    @site_points_list = @building.site.points_list
  end

  def new
  end

  def create
    @building = Building.new(building_params)
    @building.site_id = params[:id]
    @building.save
  end

  def edit
  end

  def update
    @building = Building.find(params[:id])
    @building.update(building_params)
  end

  def destroy
    @building = Building.find(params[:id])
    @building.destroy
  end

  def report
  end

  def send_data
    p "in send data"
    building = Building.find(params[:id])
    url_args = params[:url_args].split('&')
    start_date = url_args[1]
    end_date = url_args[3]
    table = CSV.read("app/assets/datasets/site_#{building.site_id}_energy.csv", headers: true, converters: :numeric)
    table = table.select {|row| Date.parse(row.to_h['dt']) < Date.parse(end_date) && Date.parse(row.to_h['dt']) > Date.parse(start_date)}
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
    # render json: building.charts_data(table_by_cols)
    render json: table_by_cols
  end

  def building_params
    params.require(:building).permit(:name, :short_name, :image, :access_list)
  end
end
