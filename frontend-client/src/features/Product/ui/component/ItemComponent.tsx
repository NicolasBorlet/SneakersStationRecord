import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ItemProps } from "../layout/ItemContainerLayout";
import {
  selectedShoePriceState,
  selectedShoesState,
} from "../../atoms/product-atom";
import React from "react";
import {
  Product,
  Shoessize,
  Vinyl,
} from "../../../../shared/types/shared-type";
import { success } from "../../../../shared/ui/component/ToastComponent";
import { ToastContainer } from "react-toastify";

export const ItemComponent: React.FC<ItemProps> = ({ product }) => {
  const [isShoes, setIsShoes] = useState<[]>();
  const [isVinyl, setIsVinyl] = useState<[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedShoePrice, setSelectedShoePrice] = useRecoilState(
    selectedShoePriceState
  );
  const [selectedShoes, setSelectedShoes] =
    useRecoilState<Shoessize>(selectedShoesState);
  const [quantity, setQuantity] = useState<number>(1);
  const [isSelect, setIsSelect] = useState<[number]>([1]);

  useEffect(() => {
    console.log(product);
    product.map((product: Product) => {
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

  const addToCart = (product: Vinyl | Shoessize) => {
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
        {product.map((item: Product) => (
          <div key={item.ProductID} className="flex w-full justify-between">
            <div className="w-[35%] flex justify-end">
              <img
                src={
                  item.type === "shoes"
                    ? "../src/assets/image-1.png"
                    : "../src/assets/vinyl.png"
                }
                alt={item.ProductName}
              />
            </div>
            <div className="w-[55%] flex flex-col">
              <h1 className="text-[16px] font-semibold uppercase mb-3">
                {item.ProductName}
              </h1>
              <div className="flex gap-3 mb-3 flex-col">
                <div className="flex gap-3">
                  {isShoes && isShoes.length > 0
                    ? isShoes
                        .filter(
                          (shoe: Shoessize) => shoe.ProductID === item.ProductID
                        )
                        .map((shoe: Shoessize) => (
                          <div key={shoe.ShoesSizeID} className="p-3 border">
                            {shoe.ProductID === item.ProductID ? (
                              <div
                                //Onclick select the price of the shoe with the ShoesSizeID and display it in the console
                                onClick={() => {
                                  setSelectedShoePrice(shoe.ShoesSizePrice);
                                  setSelectedShoes(shoe);
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
                </div>
                {isShoes && (
                  <div className="flex flex-col gap-y-3">
                    <div>
                      <div>
                        <p>{selectedShoePrice}€</p>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={async () => {
                          await addToCart(selectedShoes);
                          success({
                            message: "Produit ajouté au panier !",
                          });
                        }}
                        className="py-[2px] px-[22px] bg-buttonCart text-[#FFFFFF] font-[600]"
                      >
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {isVinyl &&
                isVinyl.length > 0 &&
                isVinyl.map((vinyl: Vinyl) => (
                  <div>
                    <div className="flex gap-3 mb-3">
                      <div
                        className="p-3 border w-[45px] text-center"
                        onClick={() => {
                          setQuantity(1);
                          setIsSelect([1]);
                        }}
                        style={
                          isSelect.includes(1)
                            ? { backgroundColor: "#980066", color: "#FFFFFF" }
                            : { backgroundColor: "#FFFFFF" }
                        }
                      >
                        1
                      </div>
                      <div
                        className="p-3 border w-[45px] text-center"
                        onClick={() => {
                          setQuantity(2);
                          setIsSelect([2]);
                        }}
                        style={
                          isSelect.includes(2)
                            ? { backgroundColor: "#980066", color: "#FFFFFF" }
                            : { backgroundColor: "#FFFFFF" }
                        }
                      >
                        2
                      </div>
                      <div
                        className="p-3 border w-[45px] text-center"
                        onClick={() => {
                          setQuantity(3);
                          setIsSelect([3]);
                        }}
                        style={
                          isSelect.includes(3)
                            ? { backgroundColor: "#980066", color: "#FFFFFF" }
                            : { backgroundColor: "#FFFFFF" }
                        }
                      >
                        3
                      </div>
                    </div>
                    <div key={vinyl.VinylID} className="mb-3">
                      {
                        vinyl.ProductID === item.ProductID ? (
                          <>
                            <p className="mb-3">
                              {vinyl.VinylPrice * quantity} €
                            </p>
                            <button
                              onClick={async () => {
                                await addToCart(vinyl);
                                success({
                                  message: "Produit ajouté au panier !",
                                });
                              }}
                              className="py-[2px] px-[22px] bg-buttonCart text-[#FFFFFF] font-[600]"
                            >
                              Ajouter au panier
                            </button>
                            <div className="border-t-2 border-gray-300 w-3/5 mt-3 pt-3">
                              <div className="flex gap-x-4 items-center">
                                <p className="text-body font-bold">
                                  Nous contacter
                                </p>
                                <div className="flex gap-x-4">
                                  <div>icone insta</div>
                                  <div>icone facebook</div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : null // Afficher une valeur vide
                      }
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};
