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
    this.getCollections();
  }
  getCollections = () => {
    useCollectionStore.getDailyCollections().then((collections) => {
      this.setState({
        collections: collections.data,
      });
    });
  };
  render() {
    return (
      <div>
        <ShopCollections collections={this.state.collections} />
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
