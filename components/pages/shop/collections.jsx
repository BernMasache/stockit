import CollectionComponent from "../stockitReportForm";
import CollectionsByMonthYear from "../collectionsByMonthYear";
import Link from "next/link";
import { generate } from "generate-password";
import DailyCollectionsByMonthYear from "./dailyCollectionsByMonthYear";

export default function ShopCollections(props) {
  const uniqueMonthYear = (data) => {
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

  return (
    <div className="p-3">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Collections
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the daily collections in this account.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button className="bg-green-700 rounded-md text-white p-2">
            <Link
              href={{
                pathname: "/shop/collection/daily",
                // combine router.query and query props
              }}
              className="text-decoration-none"
            >
              Initialize
            </Link>
          </button>
        </div>
      </div>
      {props?.collections.length > 0 ? (
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 h-[70vh]">
              <DailyCollectionsByMonthYear
                dates={uniqueMonthYear(props?.collections)}
                dailyCollections={props?.collections}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
