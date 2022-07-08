import React from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = () => {
    const options = {
        exportEnabled: true,
        animationEnabled: true,
        data: [{
            type: "pie",
            startAngle: 10,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            dataPoints: [
                { y: 67},
                { y: 33}
            ]
        }]}
  return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
   
  )
}

export default PieChart