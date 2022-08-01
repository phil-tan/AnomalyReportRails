class SitesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @sites = Site.all
  end

  def show
    @site = Site.find(params[:id])
    @site_buildings = @site.buildings
  end

  def new
  end

  def create
    @site = Site.new(site_params)
    @site.save
    data = "dt,,,"
    File.write("app/assets/datasets/site_#{@site.id}_energy.csv", data)
  end

  def edit
  end

  def update
  end

  def destroy
    @site = Site.find(params[:id])
    @site.destroy
  end

  def access
  end

  def access_edit
  end

  def points
  end

  def send_data
    site = Site.find(params[:id])
    url_args = params[:url_args].split('&')
    start_date = url_args[1]
    end_date = url_args[3]
    table = CSV.read("app/assets/datasets/site_#{site.id}_energy.csv", headers: true, converters: :numeric)
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
    render json: table_by_cols
  end

  def site_params
    params.require(:site).permit(:name, :short_name, :image, :access_list)
  end

end
