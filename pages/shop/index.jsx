import React from "react";
import { withRouter } from "next/router";
import ShopLayout from "../../components/layout/shop.layout";
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
import ShopCollections from "../../components/pages/shop/collections";
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
    // this.getCollections();
    // this.getCollectionConfigurations();
  }
  // getCollections = () => {
  //   useCollectionStore.getCollections().then((collections) => {
  //     this.setState({
  //       collections: collections.data,
  //     });
  //   });
  // };
  // getCollectionConfigurations = () => {
  //   useCollectionStore
  //     .getCollectionConfigurations()
  //     .then((collectionsConfiguration) => {
  //       this.setState({
  //         collectionsConfiguration: collectionsConfiguration.data,
  //       });
  //     });
  // };

  // saveToStorage = (data) => {
    // let rentalFare = useFormula.totalRent(data.rentalFare, data.numberOfDays);
    // let shopShare = useFormula.share(
    //   data.collection,
    //   data.shareShop,
    //   rentalFare,
    //   data.other
    // );
    // data.shareGryton = shopShare;
    // data.rent = rentalFare;
    // data.rentPerDay = data.rentalFare;
    // console.log(data);
    // useCollectionStore
    //   .create(data)
    //   .then((response) => {
    //     if (response.status == 201) {
    //       toast.success("Successfully created new collection", {
    //         position: "top-right",
    //         transition: Flip,
    //         autoClose: 2000,
    //         hideProgressBar: true,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //       });
    //     } else {
    //       toast.error("Error occurred", {
    //         position: "top-right",
    //         transition: Flip,
    //         autoClose: 2000,
    //         hideProgressBar: true,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //       });
    //     }
    //   })
    //   .catch((e) => {
    //     toast.error("Error occurred", {
    //       position: "top-right",
    //       transition: Flip,
    //       autoClose: 2000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //   })
    //   .finally(() => {
    //     this.getCollections();
    //   });
  // };
  // delete = (id) => {
  //   useCollectionStore
  //     .delete(id)
  //     .then((res) => {
  //       if (res.status == 200) {
  //         toast.success("Successfully deleted the collection No. " + id, {
  //           position: "top-right",
  //           transition: Flip,
  //           autoClose: 2000,
  //           hideProgressBar: true,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //         });
  //       } else {
  //         toast.error("Error occurred", {
  //           position: "top-right",
  //           transition: Flip,
  //           autoClose: 2000,
  //           hideProgressBar: true,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //         });
  //       }
  //     })
  //     .catch((e) => {
  //       toast.error("Error occurred", {
  //         position: "top-right",
  //         transition: Flip,
  //         autoClose: 2000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     })
  //     .finally(() => {
  //       this.getCollections();
  //     });
  // };

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

  // update = (data) => {
  //   console.log(data);
  //   useCollectionStore
  //     .update(data)
  //     .then((res) => {
  //       console.log(res);
  //       if (res.status == 200) {
  //         toast.success("Successfully deleted the collection No. " + id, {
  //           position: "top-right",
  //           transition: Flip,
  //           autoClose: 2000,
  //           hideProgressBar: true,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //         });
  //       } else {
  //         toast.error("Error occurred", {
  //           position: "top-right",
  //           transition: Flip,
  //           autoClose: 2000,
  //           hideProgressBar: true,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //         });
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       toast.error("Error occurred", {
  //         position: "top-right",
  //         transition: Flip,
  //         autoClose: 2000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     })
  //     .finally(() => {
  //       this.getCollections();
  //     });
  // };
  render() {
    return (
      <div>
        <ShopCollections
          // collections={this.state.collections}
          // saveToStorage={this.saveToStorage}
          // delete={this.delete}
          // update={this.update}
          // collectionsConfiguration={this.state.collectionsConfiguration}
        />
        <ToastContainer transition={Flip} />
      </div>
    );
  }
}

const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <ShopLayout>{page}</ShopLayout>;
};
export default PageWithRouter;
