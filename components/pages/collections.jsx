import CollectionComponent from "../../components/pages/stockitReportForm"

export default function Collections(props) {

    return (
        <div className="p-3">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Collections</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the daily collections in this account.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <CollectionComponent create={props.create} collectionsConfiguration={props.collectionsConfiguration} />
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 h-[70vh]">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Amount
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Rent
                                    </th>

                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Shop Share
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Gryton Share
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {props?.collections?.map((collection) => (
                                    <tr key={collection?.id} className="even:bg-gray-50">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                            {collection?.dateCollected && JSON.parse(collection?.dateCollected)}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">MK {collection?.collection}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">MK {collection?.rent}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">MK {collection?.shareShop}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">MK {collection?.shareGryton}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
