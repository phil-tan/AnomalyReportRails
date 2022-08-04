import React from 'react';
import BuildingSummaryBar from './BuildingSummaryBar';
import KpiContent from './KpiContent';
import LinePlot from './LinePlot';


const Chart = ({ chart, charts_data, if_modal, site_buildings}) => {

  if(chart.plot_type === 'line'){
    return <LinePlot chart={chart} charts_data={charts_data} if_modal={if_modal}/>
  }else if(chart.plot_type === 'kpi'){
    return <KpiContent chart={chart} charts_data={charts_data} />
  }else if(chart.plot_type === 'kpi-diff'){
    return <KpiContent chart={chart} charts_data={charts_data} />
  }else if(chart.plot_type=='building_summary'){
    return <BuildingSummaryBar chart={chart} charts_data={charts_data} if_modal={if_modal} site_buildings={site_buildings} />
  }
}
export default Chart
