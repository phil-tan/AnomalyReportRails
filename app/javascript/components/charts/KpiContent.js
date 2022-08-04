import React from 'react'

const KpiContent = ({ chart, charts_data }) => {


  const points = chart.points.split(',') //only one point

  let value = ''
  if(chart.plot_type==='kpi' && charts_data){
    console.log('entered kpi sum content calc')
    if(points[0] in charts_data){
      value = charts_data[points[0]].reduce((a,b) => a + b, 0)
    }
    value = Math.round(value).toLocaleString('en-US')
  }else if(chart.plot_type==='kpi-diff' && charts_data){
    console.log('entered kpi diff content calc')
    if(points[0] in charts_data && points[1] in charts_data){
      const sum1 = charts_data[points[0]].reduce((a,b) => a + b, 0)
      const sum2 = charts_data[points[1]].reduce((a,b) => a + b, 0)
      value = (100*(sum1 - sum2)/sum1)
    }
    value = Math.round(value).toLocaleString('en-US') + '%'
  }


  return (
    <div className='kpi-content'>
      <h1 align='center'>{ value }</h1>
    </div>
  )
}

export default KpiContent
