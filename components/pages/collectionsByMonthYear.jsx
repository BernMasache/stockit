import { Disclosure } from "@headlessui/react";
import {
  MinusSmallIcon,
  PlusSmallIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import DeleteCollection from "./forms/delete";
import UpdateCollection from "./forms/update";
import UpdateModal from "./forms/updateModal";
import { useEffect, useState } from "react";

export default function CollectionsByMonthYear(props) {
  const [openModal, setOpenModal] = useState(false);
  const [filteredCollections, setFiteredCollections] = useState([]);
  const [period, setPeriod] = useState(
    JSON.stringify(new Date().getFullYear())
  );
  const deleteCollection = (id) => {
    props?.delete(id);
  };

  const updateCollection = (data) => {
    props?.update(data);
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
  const configureCollectionByPeriod = (data, year) => {
    let holder = [];
    holder = data?.filter(
      (store) => JSON.parse(store.dateCollected).split("-")[0] == year
    );
    return holder;
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:py-1 lg:px-8 lg:py-1">
        <div className="mx-auto w-full divide-y divide-gray-900/10">
          <div className="max-w-sm">
            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Select Year
            </label>
            <select
              id="location"
              name="location"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={setYears()[0]?.year}
              onChange={(event) => setPeriod(event?.target?.value)}
            >
              {setYears()?.map((year, key) => {
                return (
                  <option key={key} value={year?.year}>
                    {year?.year}
                  </option>
                );
              })}
            </select>
          </div>

          <dl className="mt-2 space-y-6 divide-y divide-gray-900/10">
            {period &&
              props
                ?.dates(configureCollectionByPeriod(props.collections, period))
                .map((date, key) => (
                  <Disclosure as="div" key={key} className="pt-1">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">
                              {[
                                { key: "01", month: "January" },
                                { key: "02", month: "February" },
                                { key: "03", month: "March" },
                                { key: "04", month: "April" },
                                { key: "05", month: "May" },
                                { key: "06", month: "June" },
                                { key: "07", month: "July" },
                                { key: "08", month: "August" },
                                { key: "09", month: "September" },
                                { key: "10", month: "October" },
                                { key: "11", month: "November" },
                                { key: "12", month: "December" },
                              ].map((dayMonth, k) => {
                                return dayMonth?.key == date.split("-")[1] ? (
                                  <div key={k} className="">
                                    {dayMonth?.month}, {date?.split("-")[0]}
                                  </div>
                                ) : (
                                  ""
                                );
                              })}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <ChevronUpIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronDownIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-1">
                          <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                              <tr>
                                <th
                                  scope="col"
                                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                                >
                                  Date
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Amount
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Rent/Day
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  No. of Days
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Total Rent
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Shop Share
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Gryton Share
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Expenses
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Description
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              {period &&
                                configureCollectionByPeriod(
                                  props.collections,
                                  period
                                )?.map((collection) => {
                                  return (
                                    <tr
                                      key={collection?.id}
                                      className="even:bg-gray-50"
                                    >
                                      {date ==
                                      JSON.parse(
                                        collection?.dateCollected
                                      )?.slice(0, 7) ? (
                                        <>
                                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                            {collection?.dateCollected &&
                                              JSON.parse(
                                                collection?.dateCollected
                                              )}
                                          </td>
                                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            MK {collection?.collection}
                                          </td>
                                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            MK {collection?.rentPerDay}
                                          </td>
                                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {collection?.numberOfDays}
                                          </td>
                                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            MK {collection?.rent}
                                          </td>
                                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            MK {collection?.shareShop}
                                          </td>
                                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            MK {collection?.shareGryton}
                                          </td>
                                          {collection?.expenses > 0 ? (
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                              MK {collection?.expenses}
                                            </td>
                                          ) : (
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                              MK 0
                                            </td>
                                          )}
                                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {collection?.comment}
                                          </td>

                                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <UpdateCollection
                                              open={openModal}
                                              setOpen={setOpenModal}
                                              update={updateCollection}
                                              collection={collection}
                                              collectionsConfiguration={
                                                props?.collectionsConfiguration
                                              }
                                            />
                                          </td>

                                          <td>
                                            <DeleteCollection
                                              collectionId={collection?.id}
                                              delete={deleteCollection}
                                            />
                                          </td>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
