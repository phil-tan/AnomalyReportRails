import React from 'react'
import { useState } from 'react'
import { MultiSelect } from "react-multi-select-component";


const EditForm = ({chart, site_points_list}) => {
  const [title, setTitle] = useState(chart.title)
  const [row, setRow] = useState(chart.row)
  const [position, setPosition] = useState(chart.position)
  const [width, setWidth] = useState(chart.width)
  const [points, setPoints] = useState(chart.points)
  const [selected, setSelected] = useState([]);

  console.log(`Edit Button: ${site_points_list}`)

  const onSubmit = (e) => {
    console.log(e.target.elements)
    let new_chart = chart
    new_chart.title = title
    new_chart.row = row
    new_chart.width = width
    new_chart.position = position
    new_chart.points = points

    fetch(`http://localhost:3000/charts/${chart.id}`, {
      method: 'PATCH', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(new_chart),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const onDeleteClick = (e) => {
    fetch(`http://localhost:3000/charts/${chart.id}`, { method: 'DELETE' })
    .then(() => console.log('chart deleted'));
    window.location.reload(false)
  }

  let options = []
  console.log(site_points_list)
  site_points_list.sort();
  site_points_list.forEach(point => {
    options.push({label: point, value: point})
  });

   return (
      <div className='container'>
         <h3>{ chart.title }</h3>
      <form onSubmit={onSubmit}>
      <div className='row'>
        <div className='col-6'>
        <div className='form-group'>
          <label>Title</label><input className='form-control' type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label>Row</label><input className='form-control' type='text' value={row} onChange={(e)=>setRow(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label>Position</label><input className='form-control' type='text' value={position} onChange={(e)=>setPosition(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label>Width</label><input className='form-control' type='text' value={width} onChange={(e)=>setWidth(e.target.value)}/>
        </div>
        </div>
        <div className='col-6'>
        <div className='form-group'>
          <label>points</label>
          {/* <input className='form-control' type='text' value={points} onChange={(e)=>setPoints(e.target.value)}/> */}
          <MultiSelect options={options} value={selected} onChange={setSelected} labelledBy="Select"/>
        </div>
        </div>
        </div>
         <hr></hr>
         <div className='text-end'>
            <input type='submit' value='Update' className='btn btn-lg btn-primary' />
            <button className='btn btn-lg btn-danger' onClick={onDeleteClick}>Delete</button>
         </div>
      </form>
      </div>
   )

}

export default EditForm
