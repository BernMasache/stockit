import React, { Fragment } from 'react';
import { withRouter } from 'next/router'
import { Formik, Form, Field, ErrorMessage } from "formik";
//STORES , COMPONETS AND FROMS 
import { UpdateCollectionSchema } from '../../../services/schema/collection.schema';
class UpdateCollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            herdStatus: [
                {
                    name: "Present",
                    value: true
                },
                {
                    name: "Phased out",
                    value: false
                }
            ]
        };
    }
    componentDidMount() {

    }

    handleOkay = (data) => {
        this.props.onOkay(data);
    };

    render() {
        return (
            <React.Fragment>
                <Formik
                    initialValues={{

                        collection: this.props.collection.collection,
                        dateCollected: this.props.collection.dateCollected,
                        rentalFare: this.props.collection.rentalFare,
                        numberOfDays: this.props.collection.numberOfDays,
                        shareShop: this.props.collection.shareShop,
                    }}
                    validationSchema={UpdateCollectionSchema()}
                    onSubmit={(formData, { resetForm }) => {
                        var data = Object.assign({}, formData)
                        //
                        data.id = this.props.collection.id,
                            this.handleOkay(data);
                        resetForm({ values: '' });
                    }}
                >
                    {({ touched, errors, isSubmitting, values }) =>
                        <Form>
                            <div >
                                <div className='pt-2'>
                                    <h4 className="text-md font-medium leading-6 text-gray-900 capitalize"> Update Collection</h4>
                                </div>
                                <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
                                    <div className="sm:col-span-6">
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 capitalize">
                                            collection
                                        </label>
                                        <div className="mt-1">
                                            <Field
                                                type="text"
                                                name="collection"
                                                className={`  
                                              block
                                              w-full
                                              shadow-sm
                                              sm:text-sm
                                              border-gray-300
                                              rounded-md
                                              ${touched.collection && errors.collection ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}
                                            />
                                            <ErrorMessage
                                                component="span"
                                                name="collection"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <label
                                            className="block text-sm font-medium text-gray-700 capitalize" htmlFor="location">  rentalFare<span className="text-red-600">*</span>
                                        </label>
                                        <div className="mt-1">
                                            <Field
                                                type="text"
                                                name="rentalFare"
                                                className={` 
                                          block
                                          w-full
                                          shadow-sm
                                          sm:text-sm
                                          border-gray-300
                                          rounded-md
                                          ${touched.rentalFare && errors.rentalFare ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}
                                            />
                                            <ErrorMessage
                                                component="span"
                                                name="rentalFare"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                <button
                                    type="submit"
                                    className="capitalize ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                >
                                    Update
                                </button>
                            </div>
                        </Form>

                    }
                </Formik>
            </React.Fragment>
        );
    }
}


export default UpdateCollection;