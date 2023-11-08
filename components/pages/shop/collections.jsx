import CollectionComponent from "../stockitReportForm";
import CollectionsByMonthYear from "../collectionsByMonthYear";
import Link from "next/link";
import { generate } from "generate-password";

export default function ShopCollections(props) {
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
  const deleteCollection = (id) => {
    props?.delete(id);
  };
  const updateCollection = (data) => {
    console.log(data);
    // props?.update(data)
  };
  const generateId = () => {
    let id = generate({
      length: 10,
      uppercase: false,
      lowercase: true,
      numbers: true,
    });

    return id;
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
                pathname: "/shop/collection/" + generate({ length: 8 }),
                // combine router.query and query props
                query: {
                  id: generateId(),
                },
              }}
              className="text-decoration-none"
            >
              Initialize
            </Link>
          </button>
        </div>
      </div>
      {/* {props?.collections.length > 0 ? (
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 h-[70vh]">
              <CollectionsByMonthYear
                collectionsConfiguration={props.collectionsConfiguration}
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
      )} */}
    </div>
  );
}