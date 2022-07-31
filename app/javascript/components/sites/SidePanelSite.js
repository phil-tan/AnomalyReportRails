import React from 'react'


export default function({ site }) {

    let img_html = <></>
    if(site.image != ''){
        img_html = <img className="fac-image" src={ site.image }/>
    }

    return (
        <div className='side-panel'>
            <h5>{  site.name  }</h5>
            { img_html }
            <a href='#'>Edit</a>
        </div>
    )
}
