import { Product } from "../../../../shared/types/shared-type";
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
    <div>
      <div className="text-center font-special">
        <h3 className="xl:text-h3 text-[32px]">NOUVEAUTES</h3>
        <h2 className="xl:text-h2 text-[48px]">NOUVEAUTES</h2>
      </div>
      <div className="grid md:grid-cols-3 xl:grid-cols-4 justify-items-center sm:grid-cols-2 grid-cols-1 px-3">
        {products
          .sort((a: Product, b: Product) => {
            // Tri des produits en fonction de ProductUpdateTime (du plus récent au plus ancien)
            if (a.ProductUpdateTime > b.ProductUpdateTime) {
              return -1;
            }
            if (a.ProductUpdateTime < b.ProductUpdateTime) {
              return 1;
            }
            return 0;
          })
          .slice(0, 4)
          .map((product: Product) => (
            <ItemListingComponent key={product.ProductID} product={product} />
          ))}
      </div>
    </div>
  );
};

export default MostRecentProductLayout;
