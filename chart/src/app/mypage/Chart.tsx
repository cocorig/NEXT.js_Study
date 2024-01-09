"use client";
import React from "react";
import {
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const option: ChartOptions<"radar"> & ChartOptions = {
  // maintainAspectRatio: false,
  responsive: false,
  elements: {
    //데이터 속성.
    line: {
      borderWidth: 9,
      borderColor: "#9f9a9a",
      // borderJoinStyle: "bevel",
      // borderCapStyle: "round",
    },
  },
  scales: {
    r: {
      ticks: {
        stepSize: 3,
        display: false,
      },
      grid: {},
      //라벨 속성 지정.
      pointLabels: {
        font: {
          size: 10,
          weight: 500,
          family: "Pretendard",
        },
        padding: 10,
        color: "black",
      },

      suggestedMin: 0,
      suggestedMax: 10,
    },
  },

  //위에 생기는 데이터 속성 label 타이틀을 지워줍니다.
  plugins: {
    legend: {
      display: false,
      labels: {
        usePointStyle: true,
      },
    },
  },

  animation: {
    // duration: 1,
  },
};
const data = {
  labels: ["분석력", "설계력", "실행력", "공감능력", "성실함"],
  datasets: [
    {
      label: "팀 점수",
      data: [8, 7, 10, 7, 8],
      backgroundColor: "rgba(75, 141, 240, 0.2)",
      borderColor: "#3689fd",
      borderWidth: 2,
      pointRadius: 0,
      // pointHoverBackgroundColor: "#0f73ff", // 호버 배경색
      // pointHoverBorderWidth: 1, // 호버 테두리 두께
      tension: 0.05,
      spanGaps: true,
    },
    // {
    //   label: "배경1",
    //   data: [3, 3, 3, 3, 3],
    //   borderColor: "#d2dae3",
    //   backgroundColor: "white",
    //   borderWidth: 3,

    //   pointBackgroundColor: "transparent",
    //   pointBorderColor: "transparent",
    //   tension: 0.05,
    // },
    // {
    //   label: "배경2",
    //   data: [6, 6, 6, 6, 6],
    //   borderColor: "#d2dae3",
    //   backgroundColor: "white",
    //   borderWidth: 3,
    //   pointBackgroundColor: "transparent",
    //   pointBorderColor: "transparent",
    //   tension: 0.05,
    // },
    // {
    //   label: "배경3",
    //   data: [9, 9, 9, 9, 9],
    //   borderColor: "#d2dae3",
    //   backgroundColor: "white",
    //   borderWidth: 3,
    //   pointBackgroundColor: "transparent",
    //   pointBorderColor: "transparent",
    //   tension: 0.05,
    // },
    // {
    //   label: "배경4",
    //   data: [12, 12, 12, 12, 12],
    //   borderColor: "#d2dae3",
    //   backgroundColor: "white",
    //   borderWidth: 3,
    //   pointBackgroundColor: "transparent",
    //   pointBorderColor: "transparent",
    //   tension: 0.05,
    // },
  ],
};

type Props = {};

const Chart = (props: Props) => {
  return <Radar data={data} options={option} width="210" height="174" />;
};
export default Chart;
