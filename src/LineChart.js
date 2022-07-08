import React from 'react';
import './Edit.css'
import CanvasJSReact from './canvasjs.react';
        var CanvasJS = CanvasJSReact.CanvasJS;
        var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const LineChart = () => {
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
       
        axisY: {
            
            interval: 2
        },
        axisX: {
            prefix: "Jan",
            interval: 1
        },
        data: [{
            type: "line",
            toolTipContent: "Week {x}: {y}%",
            dataPoints: [
                { x: 1, y: 4 },
                { x: 2, y: 6 },
                { x: 3, y: 4 },
                { x: 4, y: 6 },
                { x: 5, y: 8 },
                { x: 6, y: 6 },
                { x: 7, y: 8 },
 
            ]
        }]
    }
  return (
    <div>
          			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
	
  )
}

export default LineChart