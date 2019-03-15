import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "../../components/Dashboard/LineGraph";
import { managerData, nationalAverage, yearLabels } from "./mockData";

export default class Dashboard extends Component {

    render() {
        return (
            <div className={classes.container}>
                <h1>Sales Dashboard</h1>
                <LineGraph
                    data={managerData}
                    average={nationalAverage}
                    labels={yearLabels} />
            </div>
        )
    }
}
