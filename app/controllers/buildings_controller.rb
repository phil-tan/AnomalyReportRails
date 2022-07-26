class BuildingsController < ApplicationController
  def index
  end

  def show
    @building = Building.find(params[:id])
    @building_charts = @building.charts
    # @backlink = {text: 'Back to Site', link: site_path(@building.site.id)}
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
end
