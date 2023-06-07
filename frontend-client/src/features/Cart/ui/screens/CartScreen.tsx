import { useState, useEffect } from "react";
import Layout from "../../../../shared/ui/layout/Layout";
import { Product } from "../../../../shared/types/shared-type";

const CartScreen = () => {
  const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
  const parsedCartItems =
    cartItemsFromLocalStorage && JSON.parse(cartItemsFromLocalStorage);
  const [cartItems, setCartItems] = useState(parsedCartItems || []);

  const [products, setProducts] = useState([]);

  // Update local storage when cart items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [cartItems]);

  // Remove item from cart
  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Clear cart
  const clearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  return (
    <Layout imgSrc="">
      <h2 className="text-h3">Panier</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item: any, index: number) => (
            //display the products for find the name of product with the id
            <>
              {products.map((product: Product) => {
                if (item.ProductID === product.ProductID) {
                  return (
                    <>
                      {product.type === "vinyl" && (
                        <li
                          key={index}
                          className="flex items-center w-full max-w-[40%] justify-between border-t-2"
                        >
                          <div>
                            <p>{product.ProductName}</p>
                            <p>{product.ProductShortDesc}</p>
                            <p>{item.VinylPrice} $</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(index)}
                            className="bg-[#FFFFFF] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] px-[5px] py-[2px] rounded-[5px] transition-all duration-300 border-[1px] border-[#000000]"
                          >
                            Supprimer l'article
                          </button>
                        </li>
                      )}

                      {product.type === "shoes" && (
                        <li
                          key={index}
                          className="flex items-center w-full max-w-[40%] justify-between border-t-2"
                        >
                          <div>
                            <p>{product.ProductName}</p>
                            <p>{product.ProductShortDesc}</p>
                            <p>{item.ShoesSizePrice} $</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(index)}
                            className="bg-[#FFFFFF] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] px-[5px] py-[2px] rounded-[5px] transition-all duration-300 border-[1px] border-[#000000]"
                          >
                            Supprimer l'article
                          </button>
                        </li>
                      )}
                    </>
                  );
                }
                return null;
              })}
            </>
          ))}
        </ul>
      )}
      <div className="flex gap-5">
        <button
          onClick={clearCart}
          className="bg-[#000000] text-[#FFFFFF] px-[20px] py-[10px] rounded-[5px] mt-5"
        >
          Payer
        </button>
        <button
          onClick={clearCart}
          className="relative bg-[#FFFFFF] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] px-[20px] py-[10px] rounded-[5px] mt-5 transition-all duration-300 border-[1px] border-[#000000]"
        >
          Vider le panier
        </button>
      </div>
    </Layout>
  );
};

export default CartScreen;
