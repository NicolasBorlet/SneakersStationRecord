import { useEffect, useState } from "react";
import { Product } from "../../../../shared/types/shared-type";
import ItemListingComponent from "../component/ItemListingComponent";
import { SneakersContainerLayoutProps } from "../../types/product-type";

const ProductContainerLayout: React.FC<SneakersContainerLayoutProps> = ({
  imgSrc,
  title,
  filter,
  productType,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isData, setisData] = useState<[]>();

  useEffect(() => {
    fetch(`http://localhost:3000/product`)
      .then((response) => response.json())
      .then((data) => {
        const isData = data.filter(
          (product: Product) => product.type === `${filter}`
        );
        setisData(isData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filter]);

  useEffect(() => {
    console.log(isData);
  }, [isData]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      {productType === "shoes" && (
        <div className="flex w-full gap-5">
          <div
            className="max-w-[25%] w-full flex justify-center items-center h-[400px]"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-[20px] text-[#FFFFFF] font-special px-3 py-5 bg-[#000000]">
              {title}
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <div className="uppercase text-[15px] font-semibold tracking-[.25em] mr-6">
                {title}
              </div>
              <div className="relative w-full">
                <div
                  style={{
                    borderBottom: "1px solid black",
                    position: "absolute",
                    zIndex: 99,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                />
              </div>
              <div className="px-[15px] py-2 border w-full max-w-[105px] ml-6">
                <a className="text-[12px]" href={title}>
                  TOUT VOIR
                </a>
              </div>
            </div>
            <div className="flex-1 flex gap-6 md:flex-row flex-col items-center flex-wrap">
              {isData?.slice(0, 6).map((item: Product) => (
                <ItemListingComponent key={item.ProductID} product={item} />
              ))}
            </div>
          </div>
        </div>
      )}
      {productType === "vinyl" && (
        <div className="flex w-full gap-5">
          <div className="w-full">
            <div className="flex justify-between items-center">
              <div className="uppercase text-[15px] font-semibold tracking-[.25em] mr-6">
                {title}
              </div>
              <div className="relative w-full">
                <div
                  style={{
                    borderBottom: "1px solid black",
                    position: "absolute",
                    zIndex: 99,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                />
              </div>
              <div className="px-[15px] py-2 border w-full max-w-[105px] ml-6">
                <a className="text-[12px]" href={title}>
                  TOUT VOIR
                </a>
              </div>
            </div>
            <div className="flex-1 flex gap-6 md:flex-row flex-col items-center flex-wrap">
              {isData?.slice(0, 6).map((item: Product) => (
                <ItemListingComponent key={item.ProductID} product={item} />
              ))}
            </div>
          </div>
          <div
            className="max-w-[25%] w-full flex justify-center items-center h-[400px]"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-[20px] text-[#FFFFFF] font-special px-3 py-5 bg-[#000000]">
              {title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductContainerLayout;
