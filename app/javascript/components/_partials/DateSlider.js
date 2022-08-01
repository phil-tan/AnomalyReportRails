import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const DateSlider = ({handleSlider, handleUpdateButton, startDate, endDate, setStartDate, setEndDate}) => {

  return (
    <>
    <div className='text-right'>
      <input type='Date' name='start-date' value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
      <input type='Date' name='end-date' value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
      <button className="btn btn-success ml-2" onClick={(e) => handleUpdateButton(e)} >Update</button>
      <div>
        <Box sx={{ width: 300 }}>
            <Slider
              min = {new Date('2017-06-01').getTime() / 1000}
              max = {new Date('2019-12-15').getTime() / 1000}
              value={[new Date(startDate).getTime()/1000, new Date(endDate).getTime()/1000]}
              onChange={handleSlider}
              valueLabelDisplay="off"
            />
          </Box>
      </div>
    </div>
    </>
  )
}

export default DateSlider
