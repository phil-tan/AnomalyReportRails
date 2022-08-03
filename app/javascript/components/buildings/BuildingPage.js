import ChartPanel from '../charts/ChartPanel'
import SidePanelBuilding from './SidePanelBuilding'
import { useState, useEffect } from 'react'
import * as React from 'react';
import DateSlider from '../_partials/DateSlider';
import Dropdown from 'react-bootstrap/Dropdown';
import AddEditButton from '../charts/AddEditButton';
import AddSelect from '../charts/AddSelect';


const BuildingPage = ({building, building_charts, building_chart_rows, site_points_list}) => {
  const [charts_data, setChartsData] = useState({})
  const [chartRows, setChartRows] = useState(building_chart_rows)
  const [buildingCharts, setCharts] = useState(building_charts)
  const [endDate, setEndDate] = useState('2019-08-10')
  const [startDate, setStartDate] = useState('2018-07-01')
  const [timeUnit, setTimeUnit] = useState('month')


  useEffect(() => {
    fetch(`http://localhost:3000/buildings/${building.id}/data/start_date&${startDate}&end_date&${endDate}`)
    .then(response => response.json())
    .then((data) => {
      console.log(building)
      console.log(data)
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

  const handleSlider = (e) => {
    setStartDate(new Date(e.target.value[0]*1000).toISOString().split('T')[0]);
    setEndDate(new Date(e.target.value[1]*1000).toISOString().split('T')[0]);
  }

  const AddChart = (chart) => {
    setCharts([...buildingCharts, chart])
  }

  if(charts_data['dt']){
    const dt = charts_data['dt'].map(d => new Date(d));
    charts_data['dt'] = dt
  }

  console.log(charts_data)

  return (
      <div className='row'>
          <div className='col-2'>
              <a className="btn btn-secondary btn-sm float-right" href={`/sites/${building.site_id}`} role="button">Back to Site</a>
              <SidePanelBuilding building={building}/>
          </div>
          <div className='col-10'>
            <div className='top-bar p-2'>
              <div className = 'settings-bar'>
                <DateSlider handleSlider={handleSlider} handleUpdateButton={handleUpdateButton}
                            startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}/>
              </div>
              <div className='tool-bar'>
                {/* <AddEditButton button_name='Add Chart' button_class='btn btn-primary btn-md'
                    building={building} site_points_list={site_points_list} new_or_edit='New' AddChart={AddChart}/> */}
                <AddSelect button_class='btn btn-primary' site={{}} building={building}
                    parent_type='building' site_points_list={site_points_list} />
              </div>
            </div>

          <ChartPanel charts={ buildingCharts } chart_rows = {chartRows} charts_data={charts_data} site_points_list={site_points_list}/>
          </div>
      </div>

  )
    // }
}

export default BuildingPage
