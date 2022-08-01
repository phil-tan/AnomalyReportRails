import { blue, red, yellow } from '@mui/material/colors';
import React from 'react'
import Plot from 'react-plotly.js'

const BuildingSummaryBar = ({ site, site_buildings, charts_data}) => {

  let x = {};
  let y = {};
  let short_name = ""
  let name_array = []
  let energies = ['CHW', 'STM', 'ELE']
  energies.forEach(energy => {
    x[energy] = []
    y[energy] = []
    site_buildings.forEach(building => {
      short_name = building.short_name;
      for (const point_name of Object.keys(charts_data)) {
        name_array = point_name.split("_")
        name_array.reverse()
        if(name_array[0] === energy && name_array[1] === short_name){
          x[energy].push(building.name + "  ");
          y[energy].push(charts_data[point_name].reduce((a,b) => a + b, 0));
          break;
        }
      }
      });
  });


  const chw_trace = {
    x: y['CHW'].map(x => x*3.517),
    y: x['CHW'],
    orientation: 'h',
    name: 'Chilled Water',
    type: 'bar',
    marker: {
      color: '#0000FF',
      width: 1
    },
  };

  const stm_trace = {
    x: y['STM'].map(x => x * .305),
    y: x['STM'],
    orientation: 'h',
    name: 'Steam',
    type: 'bar',
    marker: {
      color: '#ff0000',
      width: 1
    },
  };


  const ele_trace = {
    x: y['ELE'],
    y: x['ELE'],
    orientation: 'h',
    name: 'Electricity',
    type: 'bar',
    marker: {
      color: '#FFFF00',
      width: 1
    },
  };

  const plot_data = [chw_trace, stm_trace, ele_trace];
  const layout = {barmode: 'stack',
                  margin: {l: 200, r:20, b: 20, t:10 },
                  padding: {l: 10, r:10, b: 10, t:10},
                  autosize: true,
                  legend: {
                    orientation: 'h',
                    xanchor: 'center',
                    x: 0.5,
                    y: 1.3
                  }};
  return (

    <div className='chart-card-wrap' style={{width: '90%'}}>
    <div className='chart-card'>
      <div className='chart-menu'>
        <div><strong>Buildings Summary</strong></div>
      </div>
        <Plot
        data={ plot_data }
        layout={layout}
        style={{width: '100%', height: "100%"}}
        useResizeHandler={true} />
        </div>
    </div>
  )
}

export default BuildingSummaryBar
