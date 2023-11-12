import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function MonthlyTotalsPerYear({ collections }) {
  const dataFunction = (data) => {
    let sAssigned = data?.reduce((subjAssingedList, subjAssinged) => {
      (subjAssingedList[subjAssinged?.dateCollected?.split("-")[1]] =
        subjAssingedList[subjAssinged?.dateCollected?.split("-")[1]] ||
        []).push(subjAssinged);
      return subjAssingedList;
    }, {});
    console.log(sAssigned);
    // if (typeof sAssigned == "undefined") {
    // } else {
    //   return sAssigned;
    // }
  };
  useEffect(() => {
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
