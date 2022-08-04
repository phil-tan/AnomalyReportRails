import React from 'react'
import { useState } from 'react'
import { MultiSelect } from "react-multi-select-component";
import { useEffect } from 'react';


const KpiDiffForm = ({chart, site_points_list, new_or_edit, AddChart}) => {
  const [title, setTitle] = useState(chart.title)
  const [row, setRow] = useState(chart.row)
  const [position, setPosition] = useState(chart.position)
  const [width, setWidth] = useState(chart.width)
  const [plotOptions, setPlotOptions] = useState(chart.plot_options)
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);

  if(new_or_edit === 'Edit'){
    useEffect(() => {
      const points_array = chart.points.split(',')
      let selected_points = []
      points_array.forEach(point => {
        selected_points.push({'label': point, 'value': point})
      })
      setSelected1([selected_points[0]])
      setSelected2([selected_points[1]])
    }, [])
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submitting');
    let new_chart = chart
    new_chart.title = title
    new_chart.row = row
    new_chart.width = width
    new_chart.position = position
    new_chart.plot_type = 'kpi-diff'
    new_chart.plot_options = plotOptions
    let points = []
    selected1.forEach(opt =>{
      points.push(opt.value)
    })
    selected2.forEach(opt =>{
      points.push(opt.value)
    })
    new_chart.points = points.toString();
    console.log(new_chart.points)

    let req_method = 'POST'
    let req_url = `http://localhost:3000/buildings/${chart.parent_id}/charts`
    if(new_or_edit === 'Edit'){
      req_method = 'PATCH'
      req_url = `http://localhost:3000/charts/${chart.id}`
    }

    fetch(req_url, {
      method: req_method, // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(new_chart),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      setTimeout(() => {
        window.location.reload(false)
      }, 1000);
    })
    .catch((error) => {
      console.error('Error:', error)
      setTimeout(() => {
        window.location.reload(false)
      }, 1000);
    });
  }


  const onDeleteClick = (e) => {
    fetch(`http://localhost:3000/charts/${chart.id}`, { method: 'DELETE' })
    .then(() => {
      console.log('chart deleted')
      window.location.reload(false)});
  }

  let options = []
  site_points_list.sort();
  site_points_list.forEach(point => {
    options.push({label: point, value: point})
  });

  // setSelected(chart.points.split(','))

  //Will need extra fields
   return (
      <div className='container'>
      <form onSubmit={onSubmit}>
      <div className='row'>
      <p>Percent difference between two values.</p>
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
          <label>Width: 1/4, 1/3, 1/2, 2/3, 3/4, full</label><input className='form-control' type='text' value={width} onChange={(e)=>setWidth(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label>Options</label><input className='form-control' type='text' value={plotOptions} onChange={(e)=>setPlotOptions(e.target.value)}/>
        </div>
        </div>
        <div className='col-6'>
        <div className='form-group'>
          <label>Point</label>
          {/* <input className='form-control' type='text' value={points} onChange={(e)=>setPoints(e.target.value)}/> */}
          <MultiSelect options={options} value={selected1} onChange={setSelected1} labelledBy="Select"/>
        </div>
        <div className='form-group'>
          <label>Baseline Point</label>
          {/* <input className='form-control' type='text' value={points} onChange={(e)=>setPoints(e.target.value)}/> */}
          <MultiSelect options={options} value={selected2} onChange={setSelected2} labelledBy="Select"/>
        </div>
        </div>
        </div>
         <hr></hr>
         <div className='text-end'>
            <input type='submit' value={new_or_edit==='Edit' ? 'Update' : 'Add'} className='btn btn-lg btn-primary' />
            {new_or_edit=='Edit' ? <button className='btn btn-lg btn-danger' onClick={onDeleteClick}>Delete</button> : <></>}
         </div>
      </form>
      </div>
   )

}

export default KpiDiffForm
