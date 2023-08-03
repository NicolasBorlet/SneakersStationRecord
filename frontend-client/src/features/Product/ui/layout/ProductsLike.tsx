import React, { useEffect, useState } from "react";
import { Product } from "../../../../shared/types/shared-type";

interface ProductsLikeProps {
  vinyls?: boolean;
  shoes?: boolean;
}

const ProductsLike: React.FC<ProductsLikeProps> = React.memo(
  ({ vinyls, shoes }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch(`http://localhost:3000/product`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    if (loading) {
      return <div>loading...</div>;
    }

    const getRandomProducts = (type: string, count: number) => {
      const filteredProducts = products.filter(
        (product) => product.type === type
      );
      const randomProducts = filteredProducts
        .sort(() => 0.5 - Math.random()) // Shuffle the array randomly
        .slice(0, count); // Get the first 'count' elements
      return randomProducts;
    };

    return (
      <div className="flex flex-col">
        {vinyls === true && (
          <div className="flex flex-col">
            <h2 className="text-center text-[24px] font-semibold uppercase">
              Les vinyles que vous pourriez aimer
            </h2>
            <div className="flex justify-center items-center">
              {getRandomProducts("vinyl", 4).map((product: Product) => (
                <div
                  className="h-64 w-64 uppercase tracking-[.03em] text-center max-h-[287px]"
                  key={product.ProductID}
                  onClick={() =>
                    (window.location.href = `/product/${product.ProductID}`)
                  }
                >
                  <div className="px-5  items-center justify-center">
                    <img
                      src="http://ssr.local/wp-content/uploads/2023/06/vinyl.png"
                      alt={product.ProductName}
                      className="md:w-full"
                    />
                  </div>
                  <h3 className="text-center">{product.ProductName}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {shoes === true && (
          <div className="flex flex-col">
            <h2 className="text-center text-[24px] font-semibold uppercase">
              Votre sélection de sneakers
            </h2>
            <div className="flex justify-center items-center">
              {getRandomProducts("shoes", 4).map((product: Product) => (
                <div
                  className="h-64 w-64 uppercase tracking-[.03em] text-center max-h-[287px]"
                  key={product.ProductID}
                  onClick={() =>
                    (window.location.href = `/product/${product.ProductID}`)
                  }
                >
                  <div className="px-5  items-center justify-center">
                    <img
                      src="http://ssr.local/wp-content/uploads/2023/06/image-1.png"
                      alt={product.ProductName}
                      className="md:w-full"
                    />
                  </div>
                  <h3 className="text-center">{product.ProductName}</h3>{" "}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default ProductsLike;
