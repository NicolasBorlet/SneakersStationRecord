import { useRecoilState } from "recoil";
import ItemListingComponent from "../component/ItemListingComponent";
import { useQuery } from "react-query";
import { producsListAtom } from "../../atoms/product-atom";
import { useEffect } from "react";

const MostRecentProductLayout = () => {
  const [isProductList, setIsProductList] = useRecoilState(producsListAtom);

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("product", () =>
    fetch("http://localhost:3000/product").then((response) => response.json())
  );

  useEffect(() => {
    setIsProductList(products);
  }, [products, setIsProductList]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  return (
    <div className="px-[153px]">
      <div className="text-center font-special">
        <h3 className="text-h3">NOUVEAUTES</h3>
        <h2 className="text-h2">NOUVEAUTES</h2>
      </div>
      <div className="flex-1 flex gap-6">
        {products.map((product: any) => (
          <ItemListingComponent key={product.ProductID} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MostRecentProductLayout;
