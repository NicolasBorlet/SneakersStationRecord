import ItemListingComponent from "../component/ItemListingComponent";
import { useQuery } from "react-query";

const MostRecentProductLayout = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("product", () =>
    fetch("http://localhost:3000/product").then((response) => response.json())
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  return (
    <div className="xl:px-[153px]">
      <div className="text-center font-special">
        <h3 className="xl:text-h3 text-[32px]">NOUVEAUTES</h3>
        <h2 className="xl:text-h2 text-[48px]">NOUVEAUTES</h2>
      </div>
      <div className="flex-1 flex gap-6 md:flex-row flex-col items-center">
        {products
          .sort((a: any, b: any) => {
            // Tri des produits en fonction de ProductUpdateTime (du plus récent au plus ancien)
            if (a.ProductUpdateTime > b.ProductUpdateTime) {
              return -1;
            }
            if (a.ProductUpdateTime < b.ProductUpdateTime) {
              return 1;
            }
            return 0;
          })
          .map((product: any) => (
            <ItemListingComponent key={product.ProductID} product={product} />
          ))}
      </div>
    </div>
  );
};

export default MostRecentProductLayout;
