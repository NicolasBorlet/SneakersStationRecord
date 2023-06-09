import { useEffect, useState } from "react";
import Layout from "../../../../shared/ui/layout/Layout";
import { Product, Vinyl } from "../../../../shared/types/shared-type";
import ItemListingComponent from "../../../Product/ui/component/ItemListingComponent";

const VinylScreen = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [isData, setisData] = useState<[]>();
  const [vinylData, setVinylData] = useState<[]>();

  const [filter, setFilter] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<number>(0);
  const [artistFilter, setArtistFilter] = useState<string>("");

  useEffect(() => {
    fetch(`http://localhost:3000/product`)
      .then((response) => response.json())
      .then((data) => {
        const vinylData = data.filter(
          (product: Product) => product.type === "vinyl"
        );
        setisData(vinylData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch(`http://localhost:3000/vinyl`)
      .then((response) => response.json())
      .then((data) => {
        setVinylData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(isData);
    console.log(vinylData);
  }, [isData]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <Layout
      imgSrc="./src/assets/VINYL/Vinyl_banner.jpg"
      title="Vinyl"
      color="#00CCFF"
    >
      <div>
        <div className="py-[17px] bg-[#000000] lg:px-[50px] px-[25px] w-full left-0 top-0 flex gap-3  absolute flex-col md:flex-row">
          <div className="flex gap-4 items-center xl:px-[153px] flex-wrap">
            <div>
              <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filtrer les vinyls"
                className="font-special bg-[#000000] text-[#FFFFFF] text-[18px] border border-white rounded-md flex items-center"
              />
            </div>
            <div>
              <select
                name="price"
                id="price"
                onChange={(e) => setPriceFilter(parseFloat(e.target.value))}
                className="font-special bg-[#000000] text-[#FFFFFF] text-[18px]"
              >
                <option value={0}>Prix</option>
                {vinylData?.map((vinyl: Vinyl) => (
                  <option value={vinyl.VinylPrice}>{vinyl.VinylPrice}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                name="artist"
                id="artist"
                onChange={(e) => setArtistFilter(e.target.value)}
                className="font-special bg-[#000000] text-[#FFFFFF] text-[18px]"
              >
                <option value="">Artiste</option>
                {vinylData?.map((vinyl: Vinyl) => (
                  <option value={vinyl.VinylArtist}>{vinyl.VinylArtist}</option>
                ))}
              </select>
            </div>
            <div>
              <div className="ml-5">
                <button
                  onClick={() => {
                    setFilter("");
                    setArtistFilter("");
                    setPriceFilter(0);
                  }}
                  className="text-white bg-[#FFFFFF] px-3 py-1 "
                >
                  Réinitialiser les filtres
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 xl:grid-cols-4 justify-items-center sm:grid-cols-2 grid-cols-1 gap-6 pt-[66px]">
          {isData &&
            isData
              ?.filter((item: Product) =>
                item.ProductName.toLowerCase().includes(filter.toLowerCase())
              )
              .filter((product: Product) => {
                if (priceFilter === 0) {
                  return true;
                } else {
                  const matchingSizes = vinylData?.filter(
                    (vinyl: Vinyl) =>
                      vinyl.ProductID === product.ProductID &&
                      vinyl.VinylPrice == priceFilter
                  );
                  return matchingSizes && matchingSizes.length > 0;
                }
              })
              .filter((product: Product) => {
                if (artistFilter === "") {
                  return true;
                } else {
                  const matchingArtist = vinylData?.filter(
                    (vinyl: Vinyl) =>
                      vinyl.ProductID === product.ProductID &&
                      vinyl.VinylArtist === artistFilter
                  );
                  return matchingArtist && matchingArtist.length > 0;
                }
              })
              .map((item: Product) => (
                <ItemListingComponent key={item.ProductID} product={item} />
              ))}
        </div>
      </div>
    </Layout>
  );
};

export default VinylScreen;
