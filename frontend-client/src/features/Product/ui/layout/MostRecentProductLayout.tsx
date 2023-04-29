import { useEffect, useState } from "react";
import ItemListingComponent from "../component/ItemListingComponent";

const MostRecentProductLayout = () => {
  const [products, setProducts] = useState<any[]>([]);
  //fetch data from backend
  useEffect(() => {
    fetch("http://localhost:3000/product/")
      .then((response) => response.json())
      .then((data) => {
        const mostRecentProducts = data.slice(0, 10);
        setProducts(mostRecentProducts);
      });
  }, []);

  return (
    <div className="px-[153px]">
      <div className="text-center font-special">
        <h3 className="text-h3">NOUVEAUTES</h3>
        <h2 className="text-h2">NOUVEAUTES</h2>
      </div>
      <div className="flex-1 flex gap-6">
        {products.map((product) => (
          <ItemListingComponent key={product.ProductID} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MostRecentProductLayout;
