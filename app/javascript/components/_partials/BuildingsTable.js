import React from 'react'

const TableHead = () => {

return (
    <thead>
    <tr>
      <th className="th-sm">Name
      </th>
      <th className="th-sm">Short Name
      </th>
      <th className="th-sm">Rating
      </th>
    </tr>
  </thead>
    )
}


const BuildingTable = ({ buildings }) => {
    const script = document.createElement("script");
    script.src = "./script_table";
    script.async = true;
    document.body.appendChild(script);

    const TableRow = ({ building }) => {
        return (
            <tr><td><a href={ `/buildings/${building.id}` }>{ building.name }</a></td><td>bcode</td><td>rating</td></tr>
        )
    }

    const TableBody = ({ buildings }) => {
        return (
            <>
            { buildings.map((building) => <TableRow building={building} />) }
            </>
        )
    }
    
    return(
    <>
    <table id="dtBasicExample" fontSize='5px' className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
        < TableHead />
        <tbody>
            <TableBody buildings={ buildings }/>
        </tbody>
    </table>

    </>
    )


}

export default BuildingTable