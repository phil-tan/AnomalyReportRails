import React from 'react'
import SidePanelSite from './SidePanelSite'
import BuildingsTable from './BuildingsTable'

const SitePage = ({site, site_buildings}) => {


    if(Object.keys(site).length > 0){
        return (
            <div className='row'>
                <div className='col-2'>
                <a className='btn btn-secondary btn-sm' href='/sites'>All Sites</a>
                  <SidePanelSite site={ site }/>
                </div>
                <div className='col-10'><BuildingsTable buildings={ site_buildings }  /></div>
            </div>
        )
    }

}

export default SitePage
