import React from 'react'

const KpiContent = ({ chart, charts_data }) => {

  const points = chart.points.split(',')
  const plot_options = chart.plot_options ? chart.plot_options.split(',') : []
  let opt_hash = {}
  if(plot_options.length > 0){
    plot_options.forEach(opt => {
      opt_hash[opt.split('=')[0]] = opt.split('=')[1]
    })
  }
  console.log(opt_hash)
  let value;
  let value_text;
  let text_color;
  const multiplier = opt_hash['multiplier'] ? parseFloat(opt_hash['multiplier']) : 1
  const multiplier_2 = opt_hash['multiplier-2'] ? parseFloat(opt_hash['multiplier-2']) : 1


  if(chart.plot_type==='kpi' && charts_data){
    console.log('entered kpi sum content calc')
    if(points[0] in charts_data){
      value = multiplier*charts_data[points[0]].reduce((a,b) => a + b, 0)
    }
    value_text = !isNaN(value) ? Math.round(value).toLocaleString('en-US') : ''
  }else if(chart.plot_type==='kpi-diff' && charts_data){
    console.log(points)
    if(points[0] in charts_data && points[1] in charts_data){
      const sum1 = multiplier*charts_data[points[0]].reduce((a,b) => a + b, 0)
      const sum2 = multiplier_2*charts_data[points[1]].reduce((a,b) => a + b, 0)
      value = (100*(sum1 - sum2)/sum2)
    }
    if(value < 0){
      text_color = opt_hash['neg_color']
    }else if(value > 0){
      text_color = opt_hash['pos_color']
    }

    value_text = !isNaN(value) ? Math.round(value).toLocaleString('en-US') + '%' : ''
    value_text = (value > 0) ? "+" + value_text : value_text
    text_color = text_color ? text_color : ''
  }

  return (
    <div className='kpi-content'>
      <h1 align='center' style={{color: text_color}}>{ value_text }</h1>
    </div>
  )
}

export default KpiContent
