import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import UseCollectionStore from "../../../services/store/collection.store";
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
export default function SubmitDataComponent({
  open,
  setOpen,
  storageItems,
  setTheStorageItems,
  removeFromStorage,
}) {
  const cancelButtonRef = useRef(null);

  const submitData = () => {
    if (storageItems?.length > 0) {
      let orderedData = storageItems?.sort(
        (a, b) => new Date(a.dateCollected) - new Date(b.dateCollected)
      );
      useCollectionStore
        .createDailyCollection(orderedData)
        .then((res) => {
          if (res.status == 201) {
            sessionStorage.removeItem("STDD");
            setTheStorageItems();
            setOpen(false);
            toast.success(`Created ${res?.data?.created} entries`, {
              position: "top-right",
              transition: Flip,
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            toast.error("Error occurred", {
              position: "top-right",
              transition: Flip,
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch((err) => {
          toast.error("Error occurred", {
            position: "top-right",
            transition: Flip,
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="w-full text-base font-semibold leading-6 text-gray-900 flex flex-col"
                    >
                      <span>Save Collection</span>
                      <span> Item removed from the list cannot be undone</span>
                    </Dialog.Title>
                    <div className="mt-2 border-t">
                      {/* collections in session storage */}
                      <div>
                        <ul role="list" className="divide-y divide-gray-100">
                          {storageItems?.length > 0
                            ? storageItems
                                .sort(
                                  (a, b) =>
                                    new Date(a.dateCollected) -
                                    new Date(b.dateCollected)
                                )
                                .map((item, key) => (
                                  <li
                                    key={key}
                                    className="mx-auto w-full flex flex-row items-center justify-between gap-x-8 py-2"
                                  >
                                    <div className="flex min-w-0 gap-x-4">
                                      <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">
                                          MK {item.collection}.00
                                        </p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                          {item.dateCollected}
                                        </p>
                                      </div>
                                    </div>
                                    <span
                                      onClick={() => removeFromStorage(key)}
                                      className="rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold text-gray-100 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-500 hover:cursor-pointer"
                                    >
                                      X
                                    </span>
                                  </li>
                                ))
                            : "No collections available"}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    onClick={submitData}
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Exit
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
          <ToastContainer transition={Flip} />
        </div>
      </Dialog>
    </Transition.Root>
  );
}
