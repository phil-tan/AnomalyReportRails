class Chart < ApplicationRecord
  def parent
    if parent_type == 'building'
      Building.find(parent_id)
    elsif parent_type == 'site'
      Site.find(parent_id)
    else
      return nil
    end
  end

  def points_array
    points.split(',')
  end

  def data_table(table)
    chart_table = {'dt' => table['dt']}
    points_array.each do |point|
      chart_table.merge!(point => table[point])
    end
    return chart_table
  end

end
