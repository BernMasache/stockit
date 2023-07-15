import * as yup from 'yup';

export function CollectionSchema() {
    return (() => yup.object().shape({
        collection: yup
            .number()
            .required("Collection is required"),
        numberOfDays: yup
            .number()
            .required("Number of days is required"),
        shareShop: yup
            .number()
            .required("Share for the shop is required"),
        rentalFare: yup
            .number()
            .required("Monthly rent is required"),
        dateCollected: yup.date().required("Date is required"),
    }))
}

