import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import UseDataCalculation from "../../../services/utilities/formula";
import dashboardControl from "../../../services/utilities/dashboardControls";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const dataCalculations = new UseDataCalculation();
export default function MonthlyTotalsPerYear({
  collections,
  dailyCollections,
}) {
  const dataFunction = (data) => {
    let sAssigned = data?.reduce((subjAssingedList, subjAssinged) => {
      (subjAssingedList[
        JSON.parse(subjAssinged?.dateCollected)
          ?.split("-")
          .slice(0, 2)
          .join("-")
      ] =
        subjAssingedList[
          JSON.parse(subjAssinged?.dateCollected)
            ?.split("-")
            .slice(0, 2)
            .join("-")
        ] || []).push(subjAssinged);
      return subjAssingedList;
    }, {});

    if (typeof sAssigned == "undefined") {
    } else {
      return sAssigned;
    }
  };

  const dataFunctionAverage = (data) => {
    let sAssigned = data?.reduce((subjAssingedList, subjAssinged) => {
      (subjAssingedList[
        subjAssinged?.dateCollected?.split("-").slice(0, 2).join("-")
      ] =
        subjAssingedList[
          subjAssinged?.dateCollected?.split("-").slice(0, 2).join("-")
        ] || []).push(subjAssinged);
      return subjAssingedList;
    }, {});

    if (typeof sAssigned == "undefined") {
    } else {
      return sAssigned;
    }
  };

  useEffect(() => {
    dataFunction(collections);
    // console.log(dataFunction(collections));
  }, []);
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
    },
    series: [
      {
        name: "Monthly Total",
        data: dashboardControl.series(dataFunction(collections)),
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "bottom",
        },
      },
    },
  };

  const stateAverage = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
    },
    series: [
      // {
      //   name: "Line",
      //   type: "line",
      //   data: [
      //     {
      //       x: 1,
      //       y: 2,
      //     },
      //     {
      //       x: 2,
      //       y: 3,
      //     },
      //     {
      //       x: 3,
      //       y: 4,
      //     },
      //     {
      //       x: 4,
      //       y: 5,
      //     },
      //     {
      //       x: 5,
      //       y: 6,
      //     },
      //     {
      //       x: 6,
      //       y: 7,
      //     },
      //     {
      //       x: 7,
      //       y: 8,
      //     },
      //     {
      //       x: 8,
      //       y: 9,
      //     },
      //     {
      //       x: 9,
      //       y: 10,
      //     },
      //     {
      //       x: 30,
      //       y: 4000,
      //     },
      //   ],
      // },
      {
        type: "bar",
        name: "Average Monthly Collection",
        data: dashboardControl.averageSeriesData(
          dataFunctionAverage(dailyCollections)
        ),
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "bottom",
        },
      },
      scatter: {
        horizontal: false,
        dataLabels: {
          position: "bottom",
        },
      },
      fill: {
        type: "solid",
      },
      markers: {
        size: [6, 0],
      },
      tooltip: {
        shared: false,
        intersect: true,
      },
      legend: {
        show: false,
      },
      xaxis: {
        type: "numeric",
        min: 0,
        max: 12,
        tickAmount: 12,
      },
    },
  };
  return (
    <div className="">
      <div className="hidden md:hidden lg:block sm:hidden">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          width={1800}
          height={500}
        />
      </div>
      <div className="hidden md:block lg:hidden sm:hidden">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          width={900}
          height={350}
        />
      </div>
    </div>
  );
}
