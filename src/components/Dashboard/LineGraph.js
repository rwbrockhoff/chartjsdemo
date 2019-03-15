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
        const { data, average, labels } = this.props;
        console.log(data.length, labels.length)
        new Chart(this.chartRef.current, {
            type: "line",
            data: {
                //Bring in data
                labels: labels.length === data.length ? labels : new Array(data.length).fill("Data"),
                datasets: [
                    {
                        label: "Sales",
                        data: data,
                        fill: false

                    },
                    {
                        label: "National Average",
                        data: average,
                        fill: false
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