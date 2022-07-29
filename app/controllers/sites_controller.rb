class SitesController < ApplicationController
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
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def access
  end

  def access_edit
  end

  def points
  end

  def send_data
    @data = "This is your data"
  end
end
