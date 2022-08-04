import React from 'react'
import SidePanelSite from './SidePanelSite'
import { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SiteDash from './SiteDash';
import BuildingCard from '../buildings/BuildingCard';
import NewEditModal from '../buildings/NewEditModal';

const sort_list = (obj) => {
  obj.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
  });
  return obj
}

const SitePage = ({site, site_buildings}) => {
  const [key, setKey] = useState('buildings');
  site_buildings = sort_list(site_buildings)

  if(Object.keys(site).length > 0){
  return (
      <div className='row'>
          <div className='col-2'>
          <a className='btn btn-secondary btn-sm' href='/sites'>All Sites</a>
            <SidePanelSite site={ site }/>
          </div>
          <div className='col-10'>
          <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
              <Tab eventKey="buildings" title="Buildings">
                <div className="btn-group" role="group" aria-label="Basic example">
                  <NewEditModal site={site} building={{}} button_name='Add Building' button_class='btn btn-primary' new_or_edit='New' />
                  <a className='btn btn-secondary' href={`/sites/${site.id}/data_files`}>Upload Data</a>
                </div>
                <br></br>
                <br></br>
                <div className="d-flex flex-wrap">
                  {site_buildings.map((building)=>(
                    <BuildingCard building={building}/>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="dashboard" title="Dashboard">
                <SiteDash site={site} site_buildings={site_buildings}/>
              </Tab>
            </Tabs>
            </div>
      </div>
  )
  }

}

export default SitePage
