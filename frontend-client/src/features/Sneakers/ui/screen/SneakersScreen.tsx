import { useEffect, useState } from "react";
import Layout from "../../../../shared/ui/layout/Layout";
import { Product } from "../../../../shared/types/shared-type";

const SneakersScren = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isData, setisData] = useState<[]>();

  useEffect(() => {
    fetch(`http://localhost:3000/product`)
      .then((response) => response.json())
      .then((data) => {
        const shoesData = data.filter(
          (product: Product) => product.type === "shoes"
        );
        setisData(shoesData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(isData);
  }, [isData]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <Layout>
      <h2>Sneakers</h2>
      {isData?.map((item: Product, index: number) => (
        <div>
          {item.type === "shoes" && (
            <li key={index}>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={item.ProductThumb}
                  alt={item.ProductName}
                  className="w-72 h-72"
                />
                <h3 className="text-h3">{item.ProductName}</h3>
                <h4 className="text-h4">{item.ProductShortDesc}</h4>
              </div>
            </li>
          )}
        </div>
      ))}
    </Layout>
  );
};

export default SneakersScren;
