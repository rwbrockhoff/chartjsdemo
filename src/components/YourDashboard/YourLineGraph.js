import React, { Component } from 'react'
import classes from "./YourLineGraph.module.css";

export default class YourLineGraph extends Component {

    //You can view the walkthrough code at any time by referring to the gists in the Medium article, or the Dashboard.js and LineChart.js files. Some code in LineChart.js/Dashboard.js will not reflect all changes mentioned in the article. Styling is automatically imported in both of your views. You can use my provided classes or write your own styles. ChartJS is already installed.

    render() {
        return (
            <div className={classes.graphContainer}>
                <p>Your Line Graph</p>
            </div>
        )
    }
}
