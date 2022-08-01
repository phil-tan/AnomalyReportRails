import React from 'react'
import NewEditModal from './NewEditModal'


export default function({ building }) {

    let img_html = <></>
    if(building.image != ''){
        img_html = <img className="fac-image" src={ building.image }/>
    }

    return (
        <div className='side-panel'>
            <h5>{  building.name  }</h5>
            { img_html }
            <div className='text-end'>
              <NewEditModal site={{}} building={building} button_name='Edit' button_class='btn btn-secondary btn-sm' new_or_edit='Edit' />
            </div>
        </div>
    )
}
