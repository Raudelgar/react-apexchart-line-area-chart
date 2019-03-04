import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineAreaChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "#f4f4f4",
          foreColor: "#333",
          stacked: true
        },
        stroke: {
          curve: "smooth"
        },
        fill: {
          type: "gradient",
          opacity: [0.35, 1]
        },
        labels: [
          "Dec 01",
          "Dec 02",
          "Dec 03",
          "Dec 04",
          "Dec 05",
          "Dec 06",
          "Dec 07",
          "Dec 08",
          "Dec 09 ",
          "Dec 10",
          "Dec 11"
        ],
        markers: {
          size: 0
        },
        yaxis: [
          {
            title: {
              text: "Series A"
            }
          },
          {
            opposite: true,
            title: {
              text: "Series B"
            }
          }
        ],
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function(y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            }
          }
        },
        title: {
          text: "React Line-Area Chart Example",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px"
          }
        }
      },
      series: [
        {
          name: "TEAM A",
          // type: "line",
          data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
        },
        {
          name: "TEAM B",
          // type: "line",
          data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
        }
      ]
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="area"
        width="100%"
        heidth="450"
      />
    );
  }
}

export default LineAreaChart;
