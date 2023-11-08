/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { withRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShopCollectionSchema } from "../../../services/schema/collection.schema";
//STORES , COMPONETS AND FROMS
//INITIALISE
class ShopCollectionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {}

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOkay = (data) => {
    this.props.create(data);
    this.setState({ open: false });
  };
  //Render
  render() {
    return (
      <React.Fragment>
        <div>
          <button
            type="button"
            onClick={this.handleOpen}
            className="inline-flex items-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 capitalize"
          >
            Create
          </button>
          <Transition.Root show={this.state.open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => {}}>
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

              <div className="fixed inset-0 z-10 overflow-y-auto">
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
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                      <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                        <button
                          type="button"
                          className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                          onClick={this.handleClose}
                        >
                          <span className="sr-only">Close</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="sm:flex sm:items-start">
                        {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <ShieldCheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                                </div> */}
                        <div className="mt-3 text-center sm:mt-0  sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900 capitalize"
                          >
                            New collection
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              {/* help text  */}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Formik
                          initialValues={{
                            collection: 0,
                            dateCollected: "",
                          }}
                          validationSchema={ShopCollectionSchema()}
                          onSubmit={(formData, { resetForm }) => {
                            // console.log(formData)
                            var data = Object.assign({}, formData);
                            data.dateCollected = JSON.stringify(
                              data.dateCollected
                            );
                            this.handleOkay(data);
                            resetForm({ values: "" });
                            this.setState({ open: false });
                          }}
                        >
                          {({ touched, errors, isSubmitting, values }) => {
                            return (
                              <>
                                <Form>
                                  <div className="space-y-4">
                                    <div>
                                      <div>
                                        <label
                                          className="block text-sm font-medium text-gray-700 capitalize"
                                          htmlFor="date-collected"
                                        >
                                          Date collected
                                        </label>
                                        <Field
                                          type="date"
                                          name="dateCollected"
                                          className={`mt-2  p-2 bg-gray-100 text-gray-600 mb-2
                                                                       block
                                                                        w-full
                                                                        shadow-sm
                                                                        sm:text-sm
                                                                        border-gray-300
                                                                        rounded-md
                                                                        ${
                                                                          touched.dateCollected &&
                                                                          errors.dateCollected
                                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                                            : "focus:ring-green-500 focus:border-gray-500"
                                                                        }`}
                                        />
                                        <ErrorMessage
                                          component="span"
                                          name="dateCollected"
                                          className="invalid-feedback"
                                        />
                                      </div>

                                      <div className="">
                                        <div className="col-span-6 sm:col-span-3">
                                          <label
                                            className="block text-sm font-medium text-gray-700 capitalize"
                                            htmlFor="collection"
                                          >
                                            {" "}
                                            collection
                                          </label>
                                          <Field
                                            type="number"
                                            name="collection"
                                            className={`mt-2  p-2 bg-gray-100 mb-2
                                                                                    text-gray-600
                                                                        block
                                                                        w-full
                                                                        shadow-sm
                                                                        sm:text-sm
                                                                        border-gray-300
                                                                        rounded-md
                                                                        ${
                                                                          touched.collection &&
                                                                          errors.collection
                                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                                            : "focus:ring-green-500 focus:border-gray-500"
                                                                        }`}
                                          />
                                          <ErrorMessage
                                            component="span"
                                            name="collection"
                                            className="invalid-feedback"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <button
                                      type="submit"
                                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm capitalize"
                                    >
                                      Create
                                    </button>
                                    <button
                                      type="button"
                                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm capitalize"
                                      onClick={this.handleClose}
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </Form>
                              </>
                            );
                          }}
                        </Formik>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </React.Fragment>
    );
  }
}

const FormComponentWithRouter = withRouter(ShopCollectionComponent);

export default FormComponentWithRouter;
