import React from 'react';
import Plot from 'react-plotly.js'


const Chart = ({ chart, charts_data}) => {

  const data = charts_data
  const points = chart.points.split(",")
  console.log(chart)
  let plot_data = []
  if(data){
      // Object.keys(data).forEach((col)=> {
        points.forEach((point)=> {
            console.log(data[point]);
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

  return (
        <Plot className='plot-class'
          data={ plot_data }
          layout={{ title: chart.title,
                  margin: {l: 50, r:20, b: 20, t:60 }} }
        />
      );
}

export default Chart
