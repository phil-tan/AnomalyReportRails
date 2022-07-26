import React from 'react'
import ChartPanel from '../_partials/ChartPanel'
import SidePanelBuilding from '../_partials/SidePanelBuilding'


const BuildingPage = ({building, building_charts}) => {

  // const data = getChartData(chart.id)

    // if(Object.keys(building).length > 0){

        return (
            <div className='row'>
                <div className='col-2'><SidePanelBuilding building={ building}/></div>
                <div className='col-10'>
                <a href={`/sites/${building.site_id}`}>Back to Site</a>
                <ChartPanel charts={ building_charts }/>
                </div>
            </div>

        )
    // }
}

export default BuildingPage
