import React from 'react'
import NewEditModal from './NewEditModal'


export default function({ site }) {

    let img_html = <></>
    if(site.image != ''){
        img_html = <img className="fac-image" src={ site.image }/>
    }

    return (
        <div className='side-panel'>
            <h5>{  site.name  }</h5>
            { img_html }
            <div className='text-end'>
              <NewEditModal site={site} button_name='Edit' button_class='btn btn-secondary btn-sm' new_or_edit='Edit' />
            </div>
        </div>
    )
}
