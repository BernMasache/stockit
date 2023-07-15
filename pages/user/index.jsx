import React from "react";
import { withRouter } from "next/router";
import UserLayout from "../../components/layout/user.layout";
import Collections from "../../components/pages/collections";
import UseCollectionStore from "../../services/store/collection.store";
import UseDataCalculation from "../../services/utilities/formula";
// import Cookies from "js-cookie";

//PAGE

// Store
const useCollectionStore = new UseCollectionStore()
const useFormula = new UseDataCalculation()
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            collections: [],
            collectionsConfiguration: []
        };
    }

    componentDidMount() {
        this.getCollections()
        this.getCollectionConfigurations()
    }
    getCollections = () => {
        useCollectionStore.getCollections().then(collections => {
            this.setState({
                collections: collections.data
            })
        })
    }
    getCollectionConfigurations = () => {
        useCollectionStore.getCollectionConfigurations().then(collectionsConfiguration => {

            this.setState({
                collectionsConfiguration: collectionsConfiguration.data
            })
        })
    }

    create = (data) => {
        let rentalFare = useFormula.totalRent(data.rentalFare, data.numberOfDays)
        let shopShare = useFormula.share(data.collection, data.shareShop, rentalFare)
        data.shareGryton = shopShare
        data.rent = rentalFare
        useCollectionStore.create(data).then(response => {
            this.getCollections()
        })
    }
    render() {
        return (
            <div>
                <div className="md:flex md:items-center md:justify-between p-3 sr-only">
                    <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold leading-7 text-gray-500 sm:truncate sm:text-3xl sm:tracking-tight">
                            Daily Collection
                        </h2>
                    </div>
                    <div className="mt-4 flex md:ml-4 md:mt-0 sr-only">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Publish
                        </button>
                    </div>
                </div>

                <Collections collections={this.state.collections} create={this.create} collectionsConfiguration={this.state.collectionsConfiguration} />
            </div>
        );
    }
}

const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
    return <UserLayout>{page}</UserLayout>;
};
export default PageWithRouter;