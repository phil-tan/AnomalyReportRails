import React from 'react';
import Plot from 'react-plotly.js'
import ShowModalButton from './ShowModalButton';
import Chart from './Chart';
import EditButton from './EditButton';


const ChartCard = ({ chart, charts_data, site_points_list}) => {

  return (
    <div className='chart-card-wrap'>
    <div className='chart-card'>
      <div className='chart-menu'>
        <div><strong>{chart.title}</strong></div>
        <div>
          <ShowModalButton chart={chart} charts_data={charts_data} />
          <EditButton chart={chart} site_points_list={site_points_list} />
        </div>
      </div>
          <Chart chart={chart} charts_data={charts_data} />
        </div>
    </div>
      );
}

export default ChartCard
