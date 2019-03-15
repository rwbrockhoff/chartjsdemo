import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "../../components/Dashboard/LineGraph";
import { managerData, nationalAverage, yearLabels } from "./mockData";

export default class Dashboard extends Component {
    state = {
        data: managerData,
        nationalAverageData: nationalAverage,
        labels: yearLabels
    }

    handleButtonClick = e => {
        const { value } = e.target;
    }

    render() {
        const { data, nationalAverageData, labels } = this.state;
        return (
            <div className={classes.container}>
                <h1>Sales Dashboard</h1>
                <LineGraph
                    data={data}
                    average={nationalAverageData}
                    labels={labels} />
                <div className={classes.buttonContainer}>
                    <button
                        value="annual"
                        onClick={this.handleButtonClick}
                    >
                        Annual
                    </button>

                    <button
                        value="lastquarter"
                        onClick={this.handleButtonClick}
                    >
                        Last Quarter
                    </button>
                </div>
            </div>
        )
    }
}
