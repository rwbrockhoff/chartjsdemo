import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const { data, labels } = this.props;
        console.log(data)
        new Chart(this.chartRef.current, {
            type: "line",
            data: {
                //Bring in data
                labels,
                datasets: [
                    {
                        label: "Sales",
                        data: data,
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