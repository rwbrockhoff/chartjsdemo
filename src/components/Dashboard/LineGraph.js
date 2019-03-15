import React, { Component } from 'react'
var Chart = require("chart.js")

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        new Chart(this.chartRef.current, {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)"
                        ]
                    }
                ]
            }
        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                    style={{ width: 500, height: 300 }} />
            </div>
        )
    }
}