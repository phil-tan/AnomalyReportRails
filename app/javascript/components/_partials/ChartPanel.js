import React from 'react';
import Chart from './Chart'

const ChartPanel = ({ charts, charts_data }) => {

  console.log(charts)
    return (
        <div className='chart-panel'>
            <div className='chart-row' key='row-1'>
                { charts.filter(chart => chart.row == 1).sort((a, b) =>
                        a.position - b.position).map((chart) =><Chart chart={chart} charts_data={charts_data} key={chart.position}/>)}
            </div>

            <div className='chart-row' key='row-2'>
                { charts.filter(chart => chart.row == 2).sort((a, b) =>
                        a.position - b.position).map((chart) =><Chart chart={chart} charts_data={charts_data} key={chart.position} />)}
            </div>

            <div className='chart-row' key='row-3'>
                { charts.filter(chart => chart.row == 3).sort((a, b) =>
                        a.position - b.position).map((chart) =><Chart chart={chart} charts_data={charts_data} key={chart.position}/>)}
            </div>

            <div className='chart-row' key='row-4'>
                { charts.filter(chart => chart.row == 4).sort((a, b) =>
                        a.position - b.position).map((chart) =><Chart chart={chart} charts_data={charts_data} key={chart.position}/>)}
            </div>

            <div className='chart-row' key='row-5'>
                { charts.filter(chart => chart.row == 5).sort((a, b) =>
                        a.position - b.position).map((chart) =><Chart chart={chart} key={chart.position} />)}
            </div>

        </div>
    )
}

export default ChartPanel



// { charts.map((chart) =><Chart style={{gridArea: `C${chart.id}`}} chart={chart} />) }
