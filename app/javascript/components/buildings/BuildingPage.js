import React from 'react'
import { getPageData } from '../utils'
import ChartPanel from '../_partials/ChartPanel'
import SidePanelBuilding from '../_partials/SidePanelBuilding'


const BuildingPage = ({building, building_charts}) => {

  const charts_data = getPageData(building, "buildings")
        return (
            <div className='row'>
                <div className='col-2'><SidePanelBuilding building={building}/></div>
                <div className='col-10'>
                <a href={`/sites/${building.site_id}`}>Back to Site</a>
                <ChartPanel charts={ building_charts } charts_data={charts_data}/>
                </div>
            </div>

        )
    // }
}

export default BuildingPage
