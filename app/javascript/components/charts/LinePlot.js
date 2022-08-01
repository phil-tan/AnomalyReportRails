import React from 'react';
import Plot from 'react-plotly.js'


const LinePlot = ({ chart, charts_data, if_modal}) => {

  const data = charts_data
  const points = chart.points.split(",")
  let plot_data = []
  if(data){
      // Object.keys(data).forEach((col)=> {
        points.forEach((point)=> {
            if(data[point]){
            const trace = {
              // x: Object.keys(data[col]) ,
              // y: Object.values(data[col]).map(Number),
              x: data['dt'],
              y: data[point],
              type: 'scatter',
              mode: 'lines+markers',
              name: point,
              marker: {size: 2},

            }
            plot_data.push(trace)
          }
        }
      )
  }

  const selectorOptions = {
    buttons: [{
        step: 'month',
        stepmode: 'backward',
        count: 1,
        label: '1m'
    }, {
        step: 'month',
        stepmode: 'backward',
        count: 6,
        label: '6m'
    }, {
        step: 'year',
        stepmode: 'todate',
        count: 1,
        label: 'YTD'
    }, {
        step: 'year',
        stepmode: 'backward',
        count: 1,
        label: '1y'
    }, {
        step: 'all',
    }],
};


  let layout={
    margin: {l: 50, r:20, b: 20, t:50 },
    autosize: true,
    legend: {
      xanchor: 'center',
      x: 0.5,
      y: 1.3
    }}

  console.log(if_modal)
  if(if_modal===true){
    layout['xaxis'] = {
      rangeselector: selectorOptions,
      rangeslider: {}
      }
    layout['yaxis'] = { fixedrange: true }
    }

  return (
        <Plot
          data={ plot_data }
          layout={layout}
          style={{width: '100%', height: "100%"}}
          useResizeHandler={true}
        />
      );
}

export default LinePlot
