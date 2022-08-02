class DataFilesController < ApplicationController
  def index
    @site = Site.find(params[:id])
    @data_files = DataFile.where(site_id: @site.id)
    @data_file = DataFile.new
  end

  def new
    @data_file = DataFile.new
  end

  def create
    site = Site.find(params[:id])
    @data_file = DataFile.new(data_file_params)
    @data_file.name = @data_file.attachment_url.split('/')[-1]
    @data_file.site_id = site.id
    if @data_file.save
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
