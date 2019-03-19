import React, { Component } from 'react'
import classes from "./YourLineGraph.module.css";

export default class YourLineGraph extends Component {

    //You can view the walkthrough code at any time by referring to the gists in the Medium article, or the Dashboard.js and LineChart.js files. Some code in LineChart.js will not reflect all changes mentioned in the article.

    render() {
        return (
            <div className={classes.graphContainer}>
                <p>Your Line Graph</p>
            </div>
        )
    }
}
