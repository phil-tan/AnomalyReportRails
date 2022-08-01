import React from 'react';
import LinePlot from './LinePlot';


const Chart = ({ chart, charts_data, if_modal}) => {

  if(chart.plot_type === 'line'){
    return <LinePlot chart={chart} charts_data={charts_data} if_modal={if_modal}/>
  }else{
    return <></>
  }
}

export default Chart
