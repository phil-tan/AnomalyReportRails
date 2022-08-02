import React from 'react'

const KpiContent = ({ chart, charts_data }) => {

  const calc = 'sum'
  const points = chart.points.split(',') //only one point
  console.log(points)
  console.log(charts_data)
  let value = ''
  if(charts_data && points[0] in charts_data){
    value = charts_data[points[0]].reduce((a,b) => a + b, 0)
  }
  value = Math.round(value).toLocaleString('en-US')

  return (
    <div className='d-flex flex-row align-items-center justify-content-center'>
      <div className='text-center'>
        <h1 align='center'>{ value }</h1>
      </div>
    </div>
  )
}

export default KpiContent
