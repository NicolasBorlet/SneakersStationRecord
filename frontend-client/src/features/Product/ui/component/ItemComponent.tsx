import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ItemProps } from "../layout/ItemContainerLayout";
import { useQuery } from "react-query";
import { selectedShoePriceState } from "../../atoms/product-atom";
import React from "react";

export const ItemComponent: React.FC<ItemProps> = ({ product }) => {
  const [isShoes, setIsShoes] = useState<[]>();
  const [isVinyl, setIsVinyl] = useState<[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedShoePrice, setSelectedShoePrice] = useRecoilState(
    selectedShoePriceState
  );

  useEffect(() => {
    console.log(product);
    product.map((product: any) => {
      if (product.type === "shoes") {
        fetch(`http://localhost:3000/shoessize`)
          .then((response) => response.json())
          .then((data) => {
            setIsShoes(data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        fetch(`http://localhost:3000/vinyl`)
          .then((response) => response.json())
          .then((data) => {
            setIsVinyl(data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, [product]);

  const addToCart = (product: any) => {
    const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
    const parsedCartItems =
      cartItemsFromLocalStorage && JSON.parse(cartItemsFromLocalStorage);

    const newCartItems = parsedCartItems
      ? [...parsedCartItems, product]
      : [product];

    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      <div>
        {product.map((item: any) => (
          <div key={item.ProductID} className="flex w-full justify-between">
            <div className="w-[50%]">
              <img src={item.ProductImage} alt={item.ProductName} />
            </div>
            <div className="w-[50%]">
              <h1 className="text-[16px] font-semibold uppercase mb-3">
                {item.ProductName}
              </h1>
              <div className="flex gap-3 mb-3">
                {isShoes && isShoes.length > 0
                  ? isShoes
                      .filter((shoe: any) => shoe.ProductID === item.ProductID)
                      .map((shoe: any) => (
                        <div key={shoe.ShoesSizeID} className="p-3 border">
                          {shoe.ProductID === item.ProductID ? (
                            <div
                              //Onclick select the price of the shoe with the ShoesSizeID and display it in the console
                              onClick={() => {
                                setSelectedShoePrice(shoe.ShoesSizePrice);
                                console.log(shoe.ShoesSizePrice);
                              }}
                            >
                              <p>{shoe.ShoesSize}</p>
                            </div>
                          ) : (
                            <div>
                              Aucune pointure n'est actuellement en stock
                            </div>
                          )}
                        </div>
                      ))
                  : null}
                {isShoes && (
                  <div>
                    <p>{selectedShoePrice}</p>
                  </div>
                )}
              </div>
              {isVinyl &&
                isVinyl.length > 0 &&
                isVinyl.map((vinyl: any) => (
                  <div key={vinyl.VinylID} className="mb-3">
                    {
                      vinyl.ProductID === item.ProductID ? (
                        <>
                          <p>{vinyl.VinylPrice} €</p>
                          <button
                            onClick={() => addToCart(vinyl)}
                            className="py-[2px] px-[22px] bg-buttonCart text-[#FFFFFF] font-[600]"
                          >
                            Ajouter au panier
                          </button>
                        </>
                      ) : null // Afficher une valeur vide
                    }
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
