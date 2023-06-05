import MostRecentProductLayout from "./features/Product/ui/layout/MostRecentProductLayout";
import Spacer from "./shared/ui/component/Spacer";
import Layout from "./shared/ui/layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout imgSrc="./src/assets/HOME/Home_banner.jpg">
        <Spacer size={62} />
        <MostRecentProductLayout />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
