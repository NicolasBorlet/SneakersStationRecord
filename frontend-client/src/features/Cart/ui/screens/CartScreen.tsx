import { useState, useEffect } from "react";
import Layout from "../../../../shared/ui/layout/Layout";
import {
  Product,
  Shoessize,
  Vinyl,
} from "../../../../shared/types/shared-type";

const CartScreen = () => {
  const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
  const parsedCartItems =
    cartItemsFromLocalStorage && JSON.parse(cartItemsFromLocalStorage);
  const [cartItems, setCartItems] = useState(parsedCartItems || []);

  const [shoes, setShoes] = useState([]);
  const [vinyls, setVinyls] = useState([]);

  // Update local storage when cart items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    fetch("http://localhost:3000/shoessize")
      .then((response) => response.json())
      .then((data) => {
        setShoes(data);
      });

    fetch("http://localhost:3000/vinyl")
      .then((response) => response.json())
      .then((data) => {
        setVinyls(data);
      });
  }, [cartItems]);

  // Add item to cart
  // const addToCart = (item: any) => {
  //   setCartItems([...cartItems, item]);
  // };

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

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <Layout imgSrc="">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item: Product, index: number) => (
            <li key={index}>
              {item.ProductName} - €
              {item.type === "shoes"
                ? shoes.map((shoe: Shoessize) => {
                    if (shoe.ProductID === item.ProductID) {
                      return shoe.ShoesSizePrice;
                    }
                  })
                : vinyls.map((vinyl: Vinyl) => {
                    if (vinyl.ProductID === item.ProductID) {
                      return vinyl.VinylPrice;
                    }
                  })}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Clear Cart</button>
    </Layout>
  );
};

export default CartScreen;
