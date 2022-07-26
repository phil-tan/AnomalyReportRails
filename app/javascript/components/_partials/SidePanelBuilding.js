import React from 'react'


export default function({ building }) {

    let img_html = <></>
    if(building.image != ''){
        img_html = <img className="fac-image" src={ building.image }/>
    }

    return (
        <div className='side-panel'>
            <h5>{  building.name  }</h5>
            { img_html }
            <a href='#'>Edit</a>

        </div>
    )
}
