import React from 'react'

const KpiContent = ({ chart, charts_data }) => {

  const calc = 'sum'
  const points = chart.points.split(',') //only one point
  console.log(points)
  console.log(charts_data)
  let value = 0;
  if(charts_data){
    value = charts_data[points[0]].reduce((a,b) => a + b, 0)
  }

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='text-center'>
        <h1>{ value }</h1>
      </div>
    </div>
  )
}

export default KpiContent
