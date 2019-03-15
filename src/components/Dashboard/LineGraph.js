import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
var myChart;
//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const { data, average, labels } = this.props;
        const myChartRef = this.chartRef.current.getContext('2d');
        const { width: chartWidth } = myChartRef.canvas;

        //---Gradient Styling---//
        let gradientLine = myChartRef
            .createLinearGradient(0, 0, chartWidth, 0);
        gradientLine.addColorStop(0.7, "#98b9ab");
        gradientLine.addColorStop(1, "#a698b9");
        //---Gradient Styling---//

        myChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels.length === data.length ? labels : new Array(data.length).fill("Data"),
                datasets: [
                    {
                        label: "Sales",
                        data: data,
                        fill: false,
                        borderColor: gradientLine

                    },
                    {
                        label: "National Average",
                        data: average,
                        fill: false,
                        borderColor: gradientLine
                    }
                ]
            },
            options: {
                //Customize chart options
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                        }
                    }]
                },
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