import React from "react";
import { withRouter } from "next/router";
import UserLayout from "../../components/layout/user.layout";
import Collections from "../../components/pages/collections";
import UseCollectionStore from "../../services/store/collection.store";
import UseDataCalculation from "../../services/utilities/formula";
import CollectionsByMonthYear from "../../components/pages/collectionsByMonthYear";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Store
const useCollectionStore = new UseCollectionStore();
const useFormula = new UseDataCalculation();
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      collections: [],
      collectionsConfiguration: [],
    };
  }

  componentDidMount() {
    this.getCollections();
    this.getCollectionConfigurations();
  }
  getCollections = () => {
    useCollectionStore.getCollections().then((collections) => {
      this.setState({
        collections: collections.data,
      });
    });
  };
  getCollectionConfigurations = () => {
    useCollectionStore
      .getCollectionConfigurations()
      .then((collectionsConfiguration) => {
        this.setState({
          collectionsConfiguration: collectionsConfiguration.data,
        });
      });
  };

  create = (data) => {
    let rentalFare = useFormula.totalRent(data.rentalFare, data.numberOfDays);
    let shopShare = useFormula.share(
      data.collection,
      data.shareShop,
      rentalFare,
      data.other
    );
    data.shareGryton = shopShare;
    data.rent = rentalFare;
    data.rentPerDay = data.rentalFare;
    useCollectionStore
      .create(data)
      .then((response) => {
        if (response.status == 201) {
          toast.success("Successfully created new collection", {
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
      .catch((e) => {
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
      })
      .finally(() => {
        this.getCollections();
      });
  };
  delete = (id) => {
    useCollectionStore
      .delete(id)
      .then((res) => {
        if (res.status == 200) {
          toast.success("Successfully deleted the collection No. " + id, {
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
      .catch((e) => {
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
      })
      .finally(() => {
        this.getCollections();
      });
  };

  // create = (data) => {
  //     let rentalFare = useFormula.totalRent(data.rentalFare, data.numberOfDays)
  //     let shopShare = useFormula.share(data.collection, data.shareShop, rentalFare, data.expenses)
  //     data.shareGryton = shopShare
  //     data.rent = rentalFare
  //     data.rentPerDay = data.rentalFare
  //     useCollectionStore.create(data).then(response => {

  //         if (response.status == 201) {
  //             toast.success("Successfully created new collection", {
  //                 position: "top-right",
  //                 transition: Flip,
  //                 autoClose: 2000,
  //                 hideProgressBar: true,
  //                 closeOnClick: true,
  //                 pauseOnHover: true,
  //                 draggable: true,
  //                 progress: undefined,
  //                 theme: "light",
  //             });

  //         } else {
  //             toast.error("Error occurred", {
  //                 position: "top-right",
  //                 transition: Flip,
  //                 autoClose: 2000,
  //                 hideProgressBar: true,
  //                 closeOnClick: true,
  //                 pauseOnHover: true,
  //                 draggable: true,
  //                 progress: undefined,
  //                 theme: "light",
  //             });
  //         }
  //     }).catch(e => {
  //         toast.error("Error occurred", {
  //             position: "top-right",
  //             transition: Flip,
  //             autoClose: 2000,
  //             hideProgressBar: true,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //         });
  //     }).finally(() => {
  //         this.getCollections()
  //     })
  // }

  update = (data) => {
    console.log(data);
    useCollectionStore
      .update(data)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          toast.success("Successfully deleted the collection No. " + id, {
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
      .catch((e) => {
        console.log(e);
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
      })
      .finally(() => {
        this.getCollections();
      });
  };
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
        <Collections
          collections={this.state.collections}
          create={this.create}
          delete={this.delete}
          update={this.update}
          collectionsConfiguration={this.state.collectionsConfiguration}
        />
        <ToastContainer transition={Flip} />
      </div>
    );
  }
}

const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};
export default PageWithRouter;
