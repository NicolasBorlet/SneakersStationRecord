import { useEffect, useState } from "react";
import Layout from "../../../../shared/ui/layout/Layout";
import {
  BrandProps,
  Product,
  Shoessize,
} from "../../../../shared/types/shared-type";
import ItemListingComponent from "../../../Product/ui/component/ItemListingComponent";

const SneakersScren = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [isData, setisData] = useState<[]>();
  const [brandData, setBrandData] = useState<[]>();
  const [shoessizeData, setShoessizeData] = useState<[]>();

  const [filter, setFilter] = useState<string>("");
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<number>(0);
  const [sizeFilter, setSizeFilter] = useState<number>(0);

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

  fetch(`http://localhost:3000/brand`)
    .then((response) => response.json())
    .then((data) => {
      setBrandData(data);
    })
    .catch((error) => {
      console.log(error);
    });

  fetch(`http://localhost:3000/shoessize`)
    .then((response) => response.json())
    .then((data) => {
      setShoessizeData(data);
    })
    .catch((error) => {
      console.log(error);
    });

  useEffect(() => {
    console.log(isData);
  }, [isData]);

  useEffect(() => {
    console.log("brandFilter : ", brandFilter);
  }, [brandFilter]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <Layout
      imgSrc="./src/assets/HOME/Home_banner.jpg"
      title="Sneakers"
      color="#FF6600"
    >
      <div className="py-[17px] bg-[#000000] px-[50px] w-full left-0 top-0 flex gap-3  absolute">
        <div className="flex gap-4 items-center">
          <div>
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Filtrer les chaussures"
              className="font-special bg-[#000000] text-[#FFFFFF] text-[18px] border border-white rounded-md flex items-center"
            />
          </div>
          <div>
            <select
              name="brand"
              id="brand"
              onChange={(e) => setBrandFilter(e.target.value)}
              className="font-special bg-[#000000] text-[#FFFFFF] text-[18px]" // Apply font and background color classes
            >
              <option value="">Marque</option>
              {brandData?.map((brand: BrandProps) => (
                <option value={brand.BrandID} className="bg-transparent">
                  {brand.BrandName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              name="price"
              id="price"
              onChange={(e) => setPriceFilter(parseFloat(e.target.value))}
              className="font-special bg-[#000000] text-[#FFFFFF] text-[18px]"
            >
              <option value={0}>Prix</option>
              {shoessizeData?.map((shoesSize: Shoessize) => (
                <option value={shoesSize.ShoesSizePrice}>
                  {shoesSize.ShoesSizePrice}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              name="size"
              id="size"
              onChange={(e) => setSizeFilter(parseInt(e.target.value))}
              className="font-special bg-[#000000] text-[#FFFFFF] text-[18px]"
            >
              <option value={0}>Taille</option>
              {shoessizeData?.map((shoesSize: Shoessize) => (
                <option value={shoesSize.ShoesSize}>
                  {shoesSize.ShoesSize}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="ml-5">
            <button
              onClick={() => {
                setFilter("");
                setBrandFilter("");
                setPriceFilter(0);
                setSizeFilter(0);
              }}
              className="text-white bg-[#FFFFFF] px-3 py-1 "
            >
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex gap-6 md:flex-row flex-col items-center pt-[66px]">
        {isData
          ?.filter((item: Product) =>
            item.ProductName.toLowerCase().includes(filter.toLowerCase())
          )
          .filter((item: Product) =>
            item.BrandID.toString().includes(brandFilter)
          )
          .filter((product: Product) => {
            if (priceFilter === 0) {
              return true;
            } else {
              const matchingSizes = shoessizeData?.filter(
                (size: Shoessize) =>
                  size.ProductID === product.ProductID &&
                  size.ShoesSizePrice == priceFilter
              );
              return matchingSizes && matchingSizes.length > 0;
            }
          })
          .filter((product: Product) => {
            if (sizeFilter === 0) {
              return true;
            } else {
              const matchingSizes = shoessizeData?.filter(
                (size: Shoessize) =>
                  size.ProductID === product.ProductID &&
                  size.ShoesSize == sizeFilter
              );
              return matchingSizes && matchingSizes.length > 0;
            }
          })
          .map((item: Product) => (
            <ItemListingComponent key={item.ProductID} product={item} />
          ))}
      </div>
    </Layout>
  );
};

export default SneakersScren;
