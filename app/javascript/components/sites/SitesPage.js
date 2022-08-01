import React from 'react'
import NewEditModal from './NewEditModal'
import SiteCard from './SiteCard'
import { sort_list } from '../utils'


const SitesPage = ({sites}) => {

  sites = sort_list(sites)

    if(sites.length > 0){
        return (
            <div className='container'>
            <br></br>
            <br></br>
            <div>
            <div className='d-flex w-100 justify-content-between'>
                  <span className='mr-3'><h1>Your Sites   </h1></span>
                  <span><NewEditModal site={{}} button_name='Add Site'
                          button_class='btn btn-lg btn-primary' new_or_edit='New'/></span>
              </div>
              <hr></hr>
              <div className="d-flex flex-wrap justify-content-start">
                {sites.map((site)=>(
                  <SiteCard site={site}/>
                ))}
              </div>
              <div className='text-center'>
                  <br></br>
                  <br></br>
              </div>
            </div>
            </div>
        )
    }


}

export default SitesPage
