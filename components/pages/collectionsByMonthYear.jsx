import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "First Month",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "Second Month",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
]

export default function CollectionsByMonthYear(props) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 sm:py-1 lg:px-8 lg:py-1">
                <div className="mx-auto w-full divide-y divide-gray-900/10">
                    <dl className="mt-2 space-y-6 divide-y divide-gray-900/10">
                        {props.dates.map((date, key) => (


                            <Disclosure as="div" key={key} className="pt-1">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">{date}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-1">
                                            <tbody className="bg-white">
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
                                                                Rent/Day
                                                            </th>
                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                No. of Days
                                                            </th>
                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                Total Rent
                                                            </th>
                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                Shop Share
                                                            </th>
                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                Gryton Share
                                                            </th>

                                                        </tr>
                                                    </thead>
                                                    {
                                                        props?.collections?.map((collection) => {
                                                            return <tr key={collection?.id} className="even:bg-gray-50">
                                                                {
                                                                    date == JSON.parse(collection?.dateCollected)?.slice(0, 7) ? <>

                                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                                            {collection?.dateCollected && JSON.parse(collection?.dateCollected)}
                                                                        </td>
                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">MK {collection?.collection}</td>
                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">MK {collection?.rentPerDay}</td>

                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{collection?.numberOfDays}</td>
                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">MK {collection?.rent}</td>
                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">MK {collection?.shareShop}</td>
                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">MK {collection?.shareGryton}</td>
                                                                    </>
                                                                        : ""
                                                                }

                                                            </tr>

                                                        }
                                                        )
                                                    }
                                                </table>
                                            </tbody>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
