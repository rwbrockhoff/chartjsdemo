import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "../../components/Dashboard/LineGraph";
import chartIcon from "../../assets/chart-icon.svg";
import { managerData, nationalAverageData , yearLabels } from "./mockData";

export default class Dashboard extends Component {
    state = {
        data: managerData,
        nationalAverageData,
        labels: yearLabels
    }

    render() {
        const { data, nationalAverageData, labels } = this.state;
        return (
            <div className={classes.container}>
            <header>
                <img src={chartIcon} alt="bar chart icon" />
                <h1>Sales Dashboard</h1>
            </header>
                <LineGraph
                    data={data}
                    nationalAverageData={nationalAverageData}
                    labels={labels} />
            </div>
        )
    }
}


{/* <div className={classes.buttonContainer}>
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
</div> */}