import { Line } from "react-chartjs-2";
import React, { Component } from "react";
import { connect } from "react-redux";

class Linegraph extends Component {
  render() {
    const data = {
      labels: this.props.scoreList,
      datasets: [
        {
          label: "Score Progress",
          data: this.props.scoreList,
          smoothing: 0.3,
          accent: "palevioletred",
          fillBelow: "rgba(200,67,23,0.1)",
          hover: true
        }
      ]
    };
    const option = {
      scales:{
        yAxis:[{
          ticks:{
            suggestedMax:10,
            suggestedMin:0,
            stepSize:1
          }
        }]
      }
    };
    return (
      <div style={{width:"600px"}}>
        
          <Line data={data} option={option} />
       
     
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    scoreList: state.scoreList
  };
}

export default connect(mapStateToProps)(Linegraph);
