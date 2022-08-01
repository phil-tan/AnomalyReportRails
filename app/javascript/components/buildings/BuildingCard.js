import React from 'react'

const BuildingCard = ({building}) => {

  return (

  <div className='chart-card-wrap' style={{width: 250}}>
    <div className="chart-card">
      <div><img className="fac-image" src={ building.image }/></div>
      <div className="card-product-infos">
        <a href={`/buildings/${building.id}`}><h5>{ building.name }</h5></a>
        <p>Building Number: {building.short_name}</p>
        <div className="d-flex justify-content-between pt-3">
        </div>
      </div>
    </div>
    </div>

  )
}

export default BuildingCard
