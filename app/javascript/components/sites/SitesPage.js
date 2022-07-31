import React from 'react'
import { useState, useEffect } from 'react'
import SidePanel from '../buildings/SidePanelBuilding'


const SitesPage = ({sites}) => {

    if(sites.length > 0){
        return (
            <div className='row'>
                <div className='col-12'> { sites.map((site) =>
                    <div><a href={ `/sites/${site.id}` }>{ site.name }</a></div>) }</div>
            </div>
        )
    }


}

export default SitesPage
