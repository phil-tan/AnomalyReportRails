import React from 'react'
import { useState, useEffect } from 'react'
import DateSlider from '../_partials/DateSlider';
import Dropdown from 'react-bootstrap/Dropdown';
import BuildingSummaryBar from '../charts/BuildingSummaryBar';

const SiteDash = ({site, site_buildings}) => {
  const [charts_data, setChartsData] = useState({})
  const [endDate, setEndDate] = useState('2019-08-10')
  const [startDate, setStartDate] = useState('2018-07-01')
  const [timeUnit, setTimeUnit] = useState('month')

  useEffect(() => {
    fetch(`http://localhost:3000/sites/${site.id}/data/start_date&${startDate}&end_date&${endDate}`)
    .then(response => response.json())
    .then((data) => {
      setChartsData(data)
    })
  }, [])

  const handleUpdateButton = (e) => {
    fetch(`http://localhost:3000/sites/${site.id}/data/start_date&${startDate}&end_date&${endDate}`)
    .then(response => response.json())
    .then((data) => {
      setChartsData(data)
      console.log(data)
    })
  }

  const handleSlider = (e) => {
    setStartDate(new Date(e.target.value[0]*1000).toISOString().split('T')[0]);
    setEndDate(new Date(e.target.value[1]*1000).toISOString().split('T')[0]);
  }


  return (
    <div>
      <div className='top-bar'>
              <div className = 'settings-bar p-2'>
                <DateSlider handleSlider={handleSlider} handleUpdateButton={handleUpdateButton}
                            startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}/>
              </div>
      </div>
        <BuildingSummaryBar site={site} site_buildings={site_buildings} charts_data={charts_data}/>
    </div>
  )
}

export default SiteDash
