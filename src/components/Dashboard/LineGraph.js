import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const {data, nationalAverageData, labels} = this.props;
        const myChartRef = this.chartRef.current.getContext("2d");
        const {width: graphWidth} = myChartRef.canvas;

        var gradientLine = myChartRef
            .createLinearGradient(0, 0, graphWidth * 2, 0);
        gradientLine.addColorStop(0, "#FF006E");
        gradientLine.addColorStop(1, "#F46036");

        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Sales", 
                        data: data,
                        fill: false,
                        borderColor: gradientLine
                    },
                    {
                        label: "National Average", 
                        data: nationalAverageData,
                        fill: false,
                        borderColor: "#E0E0E0"
                    }
                ]
            },
            options: {
                //Customize chart options
                
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}