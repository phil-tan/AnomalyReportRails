require 'csv'

class DataFilesController < ApplicationController
  def index
    @site = Site.find(params[:id])
    @data_files = DataFile.where(site_id: @site.id).reverse
    @data_file = DataFile.new
  end

  def new
    @data_file = DataFile.new
  end

  def create
    @site = Site.find(params[:id])
    @datafiles = DataFile.where(site_id: @site.id)
    @datafiles[0..-2].each do |d|
      d.destroy
    end
    @data_file = DataFile.new(data_file_params)
    @data_file.name = @data_file.attachment_url.split('/')[-1]
    @data_file.site_id = @site.id
    if @data_file.save
      # table = CSV.read("public#{@data_file.attachment_url}", headers: true, converters: :numeric)
      # CSV.open("app/assets/datasets/site_#{@site.id}_energy.csv", 'w') do |csv|
      #   csv << table
      # end
      redirect_to data_files_path(@site), notice: "Successfully uploaded."
    else
      render "index"
    end
  end

  def destroy
    @site = Site.find(params[:site_id])
    @data_file = DataFile.find(params[:id])
    @data_file.destroy
    redirect_to data_files_path(@site), notice:  "Successfully deleted."
  end

  private

  def data_file_params
    params.require(:data_file).permit(:name, :attachment)
  end
end
