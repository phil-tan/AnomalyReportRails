import React from 'react'

const SiteCard = ({site}) => {

  return (

  <div className='chart-card-wrap' style={{width: 300, height: 300}}>
    <div className="chart-card">
      <div><img className="fac-image" src={ site.image } style={{height: 200}}/></div>
      <div className="card-product-infos">
        <a href={`/sites/${site.id}`}><h5>{ site.name }</h5></a>
        <p>Site Code: {site.short_name}</p>
        <div className="d-flex justify-content-between pt-3">
        </div>
      </div>
    </div>
    </div>

  )
}

export default SiteCard
