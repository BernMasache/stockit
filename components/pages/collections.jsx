import { useEffect, useState } from "react";
import CollectionComponent from "../../components/pages/stockitReportForm";
import CollectionsByMonthYear from "./collectionsByMonthYear";
import {
  CloudIcon,
  CreditCardIcon,
  ListBulletIcon,
} from "@heroicons/react/20/solid";
import DailyCollectionsByMonthYear from "./shop/dailyCollectionsByMonthYear";
import MonthlyTotalsPerYear from "./visualizations/monthlyTotalsPerYear";

const tabs = [
  {
    name: "Dashboard",
    href: "#",
    icon: CloudIcon,
    current: false,
  },
  {
    name: "Aggreagte Collections",
    href: "#",
    icon: CreditCardIcon,
    current: false,
  },
  {
    name: "Daily Collections",
    href: "#",
    icon: ListBulletIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Collections(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const [period, setPeriod] = useState(new Date().getFullYear());

  const uniqueMonthYear = (data) => {
    let dates = [];
    let splittedDate = "";
    data?.map((allDates) => {
      splittedDate =
        JSON.parse(allDates.dateCollected)?.split("-")[0] +
        "-" +
        JSON.parse(allDates.dateCollected)?.split("-")[1];
      dates.push(splittedDate);
    });
    return [...new Set(dates)];
  };
  const setYears = () => {
    let year = new Date().getFullYear();
    let years = [];
    for (let index = 0; index < 20; index++) {
      years?.push({ id: index + 1, year: year });
      year = year - 1;
    }
    return years;
  };
  const filteredCollection = (filteredPeriod, collection) => {
    // console.log(collection);
    let colls = collection?.filter(
      (coll) =>
        JSON.parse(coll?.dateCollected)?.split("-")[0] === filteredPeriod
    );
    return colls;
  };

  const uniqueDatesMonthYear = (data) => {
    let dates = [];
    let splittedDate = "";
    data?.map((allDates) => {
      splittedDate =
        allDates.dateCollected?.split("-")[0] +
        "-" +
        allDates.dateCollected?.split("-")[1];
      dates.push(splittedDate);
    });
    return [...new Set(dates)];
  };

  const deleteCollection = (id) => {
    props?.delete(id);
  };
  const deleteDailyCollection = (id) => {
    props?.deleteDailyCollection(id);
  };
  const updateCollection = (data) => {
    // console.log(data);
    // props?.update(data)
  };
  useEffect(() => {
    // console.log(props?.collections);
  });
  return (
    <div className="p-3">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Collections
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of Aggregated collections in this account.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <CollectionComponent
            create={props.create}
            collectionsConfiguration={props.collectionsConfiguration}
          />
        </div>
      </div>
      <div className="">
        <div className="mt-4">
          <nav
            className="-mb-px flex space-x-8 bg-gray-100 p-1"
            aria-label="Tabs"
          >
            {tabs.map((tab, key) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => setTabIndex(key)}
                className={classNames(
                  tab.current
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                <tab.icon
                  className={classNames(
                    tab.current
                      ? "text-indigo-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "-ml-0.5 mr-2 h-5 w-5"
                  )}
                  aria-hidden="true"
                />
                <span>{tab.name}</span>
              </a>
            ))}
          </nav>
          <div className="mt-4">
            {tabIndex == 0 ? (
              <div className="">
                <div className="max-w-sm">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Select Period
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={setYears()[0]?.year}
                    onChange={(event) => setPeriod(event?.target?.value)}
                  >
                    {setYears().map((year, key) => {
                      return (
                        <option key={key} value={year?.year}>
                          {year?.year}
                        </option>
                      );
                    })}
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                {period && (
                  <MonthlyTotalsPerYear
                    collections={filteredCollection(period, props?.collections)}
                    dailyCollections={props?.dailyCollections}
                  />
                )}
              </div>
            ) : tabIndex == 1 ? (
              <div className="">
                {props?.collections.length > 0 ? (
                  <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 h-[70vh]">
                        <CollectionsByMonthYear
                          collectionsConfiguration={
                            props.collectionsConfiguration
                          }
                          delete={deleteCollection}
                          collections={props?.collections}
                          dates={uniqueMonthYear(props?.collections)}
                          update={updateCollection}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div className="">
                <DailyCollectionsByMonthYear
                  dates={uniqueDatesMonthYear(props?.dailyCollections)}
                  dailyCollections={props?.dailyCollections}
                  deleteDailyCollection={deleteDailyCollection}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
