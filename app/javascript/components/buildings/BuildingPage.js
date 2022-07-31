import ChartPanel from '../charts/ChartPanel'
import SidePanelBuilding from './SidePanelBuilding'
import { useState, useEffect } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Dropdown from 'react-bootstrap/Dropdown';


const BuildingPage = ({building, building_charts, site_points_list}) => {
  const [charts_data, setChartsData] = useState({})
  const [endDate, setEndDate] = useState('2019-08-10')
  const [startDate, setStartDate] = useState('2018-07-01')
  const [timeUnit, setTimeUnit] = useState('month')


  useEffect(() => {
    fetch(`http://localhost:3000/buildings/${building.id}/data/start_date&${startDate}&end_date&${endDate}`)
    .then(response => response.json())
    .then((data) => {
      setChartsData(data)
    })
  }, [])

  const handleUpdateButton = (e) => {
    fetch(`http://localhost:3000/buildings/${building.id}/data/start_date&${startDate}&end_date&${endDate}`)
    .then(response => response.json())
    .then((data) => {
      setChartsData(data)
    })
  }

  const AddChart = (e) => {
    let rows = []
    building_charts.forEach(chart => {
      rows.push(chart.row)
    });
    const max_row = Math.max(...rows)
    console.log(max_row)
    let new_chart = {}
    new_chart.row = max_row + 1
    new_chart.title = "New Chart"
    new_chart.position = 100
    new_chart.parent_id = building.id
    new_chart.parent_type = 'building'

    fetch(`http://localhost:3000/buildings/${building.id}/charts/`, {
      method: 'POST', // or 'PUT'
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
    window.location.reload(false)
  }

  if(charts_data['dt']){
    const dt = charts_data['dt'].map(d => new Date(d));
    charts_data['dt'] = dt
  }

  const handleSlider = (e) => {
    setStartDate(new Date(e.target.value[0]*1000).toISOString().split('T')[0]);
    setEndDate(new Date(e.target.value[1]*1000).toISOString().split('T')[0]);
  }

  return (
      <div className='row'>
          <div className='col-2'>
              <a className="btn btn-secondary btn-sm float-right" href={`/sites/${building.site_id}`} role="button">Back to Site</a>
              <SidePanelBuilding building={building}/>
          </div>
          <div className='col-10'>
            <div className='top-bar'>
              <div className = 'settings-bar p-2'>
                <div className='text-right'>
                    <input type='Date' name='start-date' value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
                    <input type='Date' name='end-date' value={endDate} />
                    {/* <select id="select1" onChange={(e)=>settimeUnit(e.target.value)}>
                          <option value="month">Monthly</option>
                          <option value="week">Weekly</option>
                    </select> */}
                    <button className="btn btn-primary ml-2" onClick={(e) => handleUpdateButton(e)} >Update</button>
                    <div>
                      <Box sx={{ width: 300 }}>
                          <Slider
                            min = {new Date('2017-06-01').getTime() / 1000}
                            max = {new Date().getTime() / 1000}
                            value={[new Date(startDate).getTime()/1000, new Date(endDate).getTime()/1000]}
                            onChange={handleSlider}
                            valueLabelDisplay="off"
                          />
                        </Box>
                    </div>
                </div>
              </div>
              <div className='tool-bar'>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Tools
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={AddChart}>Add Chart</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Edit Building</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
            </div>

          <ChartPanel charts={ building_charts } charts_data={charts_data} site_points_list={site_points_list}/>
          </div>
      </div>

  )
    // }
}

export default BuildingPage
