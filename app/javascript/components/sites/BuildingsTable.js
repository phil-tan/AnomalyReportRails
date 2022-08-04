import React from 'react'


const BuildingTable = ({site, site_buildings, charts_data}) => {

  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' }
  ];

  let rows = []
  site_buildings.forEach(building=> {
    rows.push({id: building.short_name, title: building.name})
  });

    return(

      <>

      </>
    )


}

export default BuildingTable
