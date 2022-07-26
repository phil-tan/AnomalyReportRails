import React from 'react'
import SidePanelSite from '../_partials/SidePanelSite'
import BuildingsTable from '../_partials/BuildingsTable'

const SitePage = ({site, site_buildings}) => {


    if(Object.keys(site).length > 0){
        return (
            <div className='row'>
                <div className='col-2'><SidePanelSite site={ site }/></div>
                <div className='col-10'><BuildingsTable buildings={ site_buildings }  /></div>
            </div>
        )
    }

}

export default SitePage
