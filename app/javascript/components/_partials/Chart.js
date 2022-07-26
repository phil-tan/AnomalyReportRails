import React from 'react';
import Plot from 'react-plotly.js'

const Chart = ({ chart, data}) => {


  let plot_data = []
  if(data){
      Object.keys(data).forEach((col)=> {
        console.log(data[col])
        const trace = {
          x: Object.keys(data[col]) ,
          y: Object.values(data[col]).map(Number),
          type: 'scatter',
          mode: 'lines+markers',
          name: col,
          marker: {size: 2},
        }
        plot_data.push(trace)
      })
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
