import * as yup from 'yup';

export function CollectionSchema() {
    return (() => yup.object().shape({
        collection: yup
            .string()
            .required("Collection is required"),
        collector: yup
            .string()
            .required("User is required"),
        dateCollected: yup.date().max(new Date(), "Date collected cannot be beyond today").required("Date is required"),
    }))
}

