import React from 'react';
import ChartCard from './ChartCard';


const ChartPanel = ({ charts, chart_rows, charts_data, site_points_list }) => {

    console.log(charts_data)
    return (
        <div className='chart-panel'>
        {chart_rows.map((chart_row) => (
          <div className='chart-row' key={`row-${chart_row.row_number}`} style={{height: chart_row.height}}>
                { charts.filter(chart => chart.row == chart_row.row_number).sort((a, b) =>
                        a.position - b.position).map((chart) =><ChartCard chart={chart} charts_data={charts_data} if_modal={false}
                                                                    site_points_list={site_points_list} key={chart.position}/>)}
            </div>
        ))}
        </div>
    )
}

export default ChartPanel



// { charts.map((chart) =><Chart style={{gridArea: `C${chart.id}`}} chart={chart} />) }
