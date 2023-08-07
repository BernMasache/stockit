import React, { Fragment } from 'react';
import { withRouter } from 'next/router'
import { withTranslation } from 'next-i18next';
import { Formik, Form, Field, ErrorMessage } from "formik";
//STORES , COMPONETS AND FROMS 
import { UpdateHerdSchema } from "../../../../services/schema/herd.schema";
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
                                    <h4 className="text-md font-medium leading-6 text-gray-900 capitalize"> {this.props.t('index_page.components.create.herd_details', { ns: 'herd' })}</h4>
                                </div>
                                <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
                                    <div className="sm:col-span-6">
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 capitalize">
                                            {this.props.t('collections.herd.name', { ns: 'common' })}
                                        </label>
                                        <div className="mt-1">
                                            <Field
                                                type="text"
                                                name="name"
                                                className={`  
                                              block
                                              w-full
                                              shadow-sm
                                              sm:text-sm
                                              border-gray-300
                                              rounded-md
                                              ${touched.name && errors.name ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}
                                            />
                                            <ErrorMessage
                                                component="span"
                                                name="name"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <label
                                            className="block text-sm font-medium text-gray-700 capitalize" htmlFor="location">  {this.props.t('collections.herd.location', { ns: 'common' })} <span className="text-red-600">*</span>
                                        </label>
                                        <div className="mt-1">
                                            <Field
                                                type="text"
                                                name="location"
                                                className={` 
                                          block
                                          w-full
                                          shadow-sm
                                          sm:text-sm
                                          border-gray-300
                                          rounded-md
                                          ${touched.location && errors.location ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}
                                            />
                                            <ErrorMessage
                                                component="span"
                                                name="location"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className='pt-2'>
                                    <h4 className="text-md font-medium leading-6 text-gray-900 capitalize"> {this.props.t('index_page.components.create.herd_schedule_details', { ns: 'herd' })}</h4>
                                </div>
                                <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
                                    <div className="col-span-6 sm:col-span-6">
                                        <label
                                            className="block text-sm font-medium text-gray-700 capitalize" htmlFor="Milking_start">  {this.props.t('collections.herd.Milking_start', { ns: 'common' })} <span className="text-red-600">*</span>
                                        </label>
                                        <div className="mt-1">
                                            <Field
                                                type="time"
                                                name="Milking_start"

                                                className={`  
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border-gray-300
                                  rounded-md
                                  ${touched.Milking_start && errors.Milking_start ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}
                                            />
                                            <ErrorMessage
                                                component="span"
                                                name="Milking_start"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-6 sm:col-span-6">
                                        <label
                                            className="block text-sm font-medium text-gray-700 capitalize" htmlFor="Milking_end">  {this.props.t('collections.herd.Milking_end', { ns: 'common' })} <span className="text-red-600">*</span>
                                        </label>
                                        <div className="mt-1">
                                            <Field
                                                type="time"
                                                name="Milking_end"
                                                className={` 
                          block
                          shadow-sm
                          w-full
                          sm:text-sm
                          border-gray-300
                          rounded-md
                          ${touched.Milking_end && errors.Milking_end ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}
                                            />
                                            <ErrorMessage
                                                component="span"
                                                name="Milking_end"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div >
                                <div className='pt-2'>
                                    <h4 className="text-md font-medium leading-6 text-gray-900 capitalize"> {this.props.t('index_page.components.create.herd_manager_details', { ns: 'herd' })}</h4>
                                </div>
                                <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
                                    <div className="sm:col-span-6">
                                        <label
                                            className="block text-sm font-medium text-gray-700 capitalize" htmlFor="status">  {this.props.t('collections.herd.status', { ns: 'common' })} <span className="text-red-600">*</span>
                                        </label>
                                        <div className="mt-1">
                                            <Field as="select" type="text" name="status" className={`
                                                block
                                                shadow-sm
                                                w-full
                                                sm:text-sm
                                                border-gray-300
                                                rounded-md
                                                ${touched.status && errors.status ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}>
                                                <option></option>
                                                {this.state.herdStatus.map((herdState, i) => {
                                                    return <option value={herdState.value} key={i} >{herdState.name}</option>;
                                                })}


                                            </Field>
                                            <ErrorMessage
                                                component="span"
                                                name="status"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-6">

                                        <label
                                            className="block text-sm font-medium text-gray-700 capitalize" htmlFor="user">  {this.props.t('collections.herd.user_id', { ns: 'common' })} <span className="text-red-600">*</span>
                                        </label>
                                        <div className="mt-1">
                                            <Field as="select" name="user_id" type="text" className={`  
                                          block
                                          shadow-sm
                                          w-full
                                          sm:text-sm
                                          border-gray-300
                                          rounded-md
                                          ${touched.user_id && errors.user_id ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}>
                                                <option > </option>
                                                {this.props.users.map((user, i) => {
                                                    return <option value={user.id} key={user.id} >{user.username}</option>;
                                                })}


                                            </Field>
                                            <ErrorMessage
                                                component="span"
                                                name="user_id"
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
                                    {this.props.t('forms.update', { ns: 'common' })}
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