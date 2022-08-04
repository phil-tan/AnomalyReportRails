import React from 'react';
import ShowModalButton from './ShowModalButton';
import Chart from './Chart'
import EditButton from './EditButton';


const ChartCard = ({ chart, charts_data, site_points_list}) => {

  let chart_width = ''

  switch(chart.width) {
    case 'full':
      chart_width = '100%'
      break;
    case '3/4':
      chart_width = '75%'
      break;
    case '2/3':
      chart_width = '67%'
      break;
    case '1/2':
      chart_width = '50%'
      break;
    case '1/3':
      chart_width = '33%'
      break;
    case '1/4':
      chart_width = '25%'
      break;
    default:
      chart_width = '50%'
  }


  return (
    <div className='chart-card-wrap' style={{width: chart_width}}>
    <div className='chart-card'>
      <div className='chart-menu'>
        <div className='text-left overflow-hidden'><strong>{chart.title}</strong></div>
        <div>
          <ShowModalButton chart={chart} charts_data={charts_data} />
          <EditButton button_name='Edit' button_class='btn btn-sm btn-outline-secondary'
            chart={chart} site_points_list={site_points_list}/>
        </div>
      </div>
          <Chart chart={chart} charts_data={charts_data} />
        </div>
    </div>
      );
}

export default ChartCard
