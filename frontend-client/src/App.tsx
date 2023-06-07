import MostRecentProductLayout from "./features/Product/ui/layout/MostRecentProductLayout";
import ProductContainerLayout from "./features/Product/ui/layout/ProductContainerLayout";
import Spacer from "./shared/ui/component/Spacer";
import Layout from "./shared/ui/layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import ShopLayout from "./shared/ui/layout/ShopLayout";
import { Type } from "./features/Product/types/product-type";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout imgSrc="./src/assets/HOME/Home_banner.jpg">
        <Spacer size={62} />
        <MostRecentProductLayout />
        <Spacer size={80} />
        <ProductContainerLayout
          imgSrc="./src/assets/HOME/Home_shoes.jpg"
          title="sneakers"
          filter="shoes"
          productType={Type.shoes}
          link=""
        />
        <Spacer size={50} />
        <ProductContainerLayout
          imgSrc="./src/assets/HOME/Home_vinyl.jpg"
          title="vinyles"
          filter="vinyl"
          productType={Type.vinyl}
          link=""
        />
        <Spacer size={50} />
        <ShopLayout />
      </Layout>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
