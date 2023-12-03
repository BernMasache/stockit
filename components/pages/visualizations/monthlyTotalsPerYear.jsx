import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import UseDataCalculation from "../../../services/utilities/formula";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const dataCalculations = new UseDataCalculation();
export default function MonthlyTotalsPerYear({ collections }) {
  const dataFunction = (data) => {
    let sAssigned = data?.reduce((subjAssingedList, subjAssinged) => {
      (subjAssingedList[
        subjAssinged?.dateCollected?.split("-").slice(0, 2).join("-")
      ] =
        subjAssingedList[
          subjAssinged?.dateCollected?.split("-").slice(0, 2).join("-")
        ] || []).push(subjAssinged);
      return subjAssingedList;
    }, {});
    // console.log(sAssigned);
    if (typeof sAssigned == "undefined") {
    } else {
      return sAssigned;
    }
  };
  useEffect(() => {
    dataCalculations.monthlyTotal({
      "2023-07": [
        { id: 1, collection: "5500", dateCollected: "2023-07-2" },
        { id: 2, collection: "12000", dateCollected: "2023-07-5" },
      ],
      "2023-08": [
        { id: 10, collection: "7000", dateCollected: "2023-08-12" },
        { id: 21, collection: "4500", dateCollected: "2023-08-14" },
        { id: 11, collection: "11000", dateCollected: "2023-08-18" },
        { id: 12, collection: "10000", dateCollected: "2023-08-23" },
      ],
      "2023-09": [
        { id: 3, collection: "8000", dateCollected: "2023-09-1" },
        { id: 4, collection: "21000", dateCollected: "2023-09-4" },
        { id: 7, collection: "13500", dateCollected: "2023-09-6" },
      ],
    });
    dataFunction(collections);
  });
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
        data: [
          89000, 67000, 80000, 67000, 69840, 50000, 67890, 70000, 56000, 80500,
          100000, 76000,
        ],
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
  return (
    <div className="">
      <div className="hidden md:hidden lg:block sm:hidden">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          width={1200}
          height={350}
        />
      </div>
      <div className="hidden md:block lg:hidden sm:hidden">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          width={600}
          height={350}
        />
      </div>
      <div className="hidden md:hidden lg:hidden sm:block">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          width={500}
          height={350}
        />
      </div>
    </div>
  );
}
