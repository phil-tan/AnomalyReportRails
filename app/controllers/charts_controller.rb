class ChartsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    @chart = Chart.new(chart_params)
    @chart.save
  end

  def edit
  end

  def points_list
    chart = Chart.find(params[:id])
    @site_points_list = {}
    if chart.parent_type == 'building'
      building = Building.find(@chart.parent_id)
      @site_points_list = building.site.points_list
    elsif @chart.parent_type == 'site'
      site = Site.find(@chart.parent_id)
      @site_points_list = site.points_list
    end
    return @site_points_list
  end

  def update
    @chart = Chart.find(params[:id])
    @chart.update(chart_params)
  end

  def destroy
    @chart = Chart.find(params[:id])
    @chart.destroy
  end

  def send_data
    @chart = Chart.find(params[:id])
    points = @chart.points.split(',')
  end

  def chart_params
    params.require(:chart).permit(:title, :row, :position, :width, :points, :parent_type, :parent_id)
  end
end


# @api.route("/api/<string:url_args>")
# def api_building_data(url_args)
#     # start_time = datetime.now()
#     args_dict = url_decode(url_args)

#     start_date = params[:start_date]
#     end_date = params[:end_date]
#     chart = Chart.find(params[:chart_id])
#     site_id = chart.get_site_id()

#     df = pd.read_csv(f"AnomalyReport/files/site_{site_id}_energy.csv")
#     df = df.set_index(pd.DatetimeIndex(df['timestamp']))
#     df = df[df.index >= start_date]
#     df = df[df.index <= end_date]
#     points_list = Chart.query.get_or_404(chart_id).points.split(',')
#     points_list = map(lambda x: x.strip(), points_list)
#     df = df[points_list]

#     return df.to_json( date_format='iso')



# def my_datetime(year, month, day, hour, minute):
#     try:
#         return datetime(year, month, day, hour, minute)
#     except:
#         return pd.np.nan
