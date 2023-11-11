import React, { useEffect, useState } from "react";
import ShopLayout from "../../../components/layout/shop.layout";
import Router, { withRouter } from "next/router";
import SubmitDataComponent from "../../../components/pages/shop/submitToSever";
import UseCollectionStore from "../../../services/store/collection.store";
import sessionStorageController from "../../../services/utilities/sessionStorage";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useCollectionStore = new UseCollectionStore();

function CollectionPool() {
  const [storageItems, setStorageItems] = useState([]);
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
    if (
      values.collection === null ||
      values.collection === "" ||
      values.collection === undefined ||
      values.dateCollected === null ||
      values.dateCollected === "" ||
      values.collection === dateCollected
    ) {
    } else {
      let sessionStora = sessionStorageController.save("STDD", values);
      let data = sessionStorage.getItem("STDD");
      if (data == null) {
      } else {
        setStorageItems(JSON.parse(data));
      }
      toast.success(sessionStora?.message, {
        position: "top-right",
        transition: Flip,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const setTheStorageItems = () => {
    setStorageItems([]);
  };
  const removeFromStorage = (index) => {
    let data = sessionStorage.getItem("STDD");
    if (data == null) {
    } else {
      let remainingItems = JSON.parse(data);
      remainingItems?.splice(index, 1);
      if (remainingItems.length > 0) {
        sessionStorage.setItem("STDD", JSON.stringify(remainingItems));
        let dat = sessionStorage.getItem("STDD");
        setStorageItems(JSON.parse(dat));
      } else if (remainingItems.length == 0) {
        sessionStorage.removeItem("STDD");
        setStorageItems([]);
      }
    }
  };
  useEffect(() => {
    let data = sessionStorage.getItem("STDD");
    if (data == null) {
    } else {
      setStorageItems(JSON.parse(data));
    }
  }, []);
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
              Add to list
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="bg-green-600 p-2 text-white rounded-md hover:bg-green-500"
            >
              Submit
            </button>

            <button
              onClick={() => Router.push("/")}
              className="bg-blue-600 p-2 text-white rounded-md hover:bg-blue-500"
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <SubmitDataComponent
        open={open}
        setOpen={setOpen}
        storageItems={storageItems}
        setTheStorageItems={setTheStorageItems}
        removeFromStorage={removeFromStorage}
      />
      <ToastContainer transition={Flip} />
    </div>
  );
}
const PageWithRouter = withRouter(CollectionPool);
PageWithRouter.getLayout = function getLayout(page) {
  return <ShopLayout>{page}</ShopLayout>;
};
export default PageWithRouter;
