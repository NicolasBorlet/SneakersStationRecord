import Banner from "./shared/ui/component/Banner";
import MostRecentProductLayout from "./features/Product/ui/layout/MostRecentProductLayout";
import Spacer from "./shared/ui/component/Spacer";
import Layout from "./shared/ui/layout/Layout";

function App() {
  return (
    <Layout>
      <div>
        <Banner img="./src/assets/HOME/banner.jpg" />
        <Spacer size={62} />
        <MostRecentProductLayout />
      </div>
    </Layout>
  );
}

export default App;
