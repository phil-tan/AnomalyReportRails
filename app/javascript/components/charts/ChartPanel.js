import React from 'react';
import ChartCard from './ChartCard';


const ChartPanel = ({ charts, charts_data, site_points_list }) => {

    return (
        <div className='chart-panel'>
        {[
          ...Array(5),
        ].map((value, index) => (
          <div className='chart-row' key={`row-${index+1}`}>
                { charts.filter(chart => chart.row == index+1).sort((a, b) =>
                        a.position - b.position).map((chart) =><ChartCard chart={chart} charts_data={charts_data} if_modal={false}
                                                                    site_points_list={site_points_list} key={chart.position}/>)}
            </div>
        ))}
        </div>
    )
}

export default ChartPanel



// { charts.map((chart) =><Chart style={{gridArea: `C${chart.id}`}} chart={chart} />) }
