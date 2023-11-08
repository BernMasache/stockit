import React, { useState } from "react";
import ShopLayout from "../../../components/layout/shop.layout";
import { withRouter } from "next/router";
import SubmitDataComponent from "../../../components/pages/shop/submitToSever";

function CollectionPool() {
  const [open, setOpen] = useState(false);

  const [values, setValues] = useState({
    dateCollected: "",
    collection: "",
  });
  const handleValues = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const saveToSessionStorage = () => {
    console.log(values);
  };
  return (
    <div>
      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="dateCollected"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date collected
            </label>
            <div className="mt-2">
              <input
                onChange={handleValues}
                type="date"
                name="dateCollected"
                id="dateCollected"
                autoComplete="dateCollected"
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="collection"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Daily collection
            </label>
            <div className="mt-2">
              <input
                onChange={handleValues}
                type="number"
                name="collection"
                id="collection"
                autoComplete="collection"
                placeholder="Daily collection"
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-6 flex flex-row justify-end space-x-5">
            <button
              type="button"
              onClick={saveToSessionStorage}
              className="bg-orange-600 p-2 text-white rounded-md hover:bg-orange-500"
            >
              Save to list
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="bg-green-600 p-2 text-white rounded-md hover:bg-green-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <SubmitDataComponent open={open} setOpen={setOpen} />
    </div>
  );
}
const PageWithRouter = withRouter(CollectionPool);
PageWithRouter.getLayout = function getLayout(page) {
  return <ShopLayout>{page}</ShopLayout>;
};
export default PageWithRouter;
