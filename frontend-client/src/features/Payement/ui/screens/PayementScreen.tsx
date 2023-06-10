import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../layouts/CheckoutForm";
import { useEffect, useState } from "react";
import Layout from "../../../../shared/ui/layout/Layout";

const stripePromise = loadStripe(
  "pk_test_51NGRiVCvHdWQNfiZT7VGD7VybVjlhnpinN5XuYBCiAnihoI2qST45Uq2GZ9HDlz5ZQbCkGyqAZmymVsNUdZlzpjW00GMEQc25H"
);

const PayementScreen = () => {
  const [clientSecret, setClientSecret] = useState("");
  const total = localStorage.getItem("total");
  const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
  const payload = {
    cartItems:
      cartItemsFromLocalStorage && JSON.parse(cartItemsFromLocalStorage),
    amount: total && JSON.parse(total) * 100, // Conversion en centimes
    currency: "eur",
  };

  useEffect(() => {
    fetch("http://localhost:3000/payment", {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then(async (result) => {
        const { clientSecret } = await result.json();
        setClientSecret(clientSecret);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(localStorage.getItem("cartItems"));
  }, []);

  return (
    <Layout>
      <div className="p-5">
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        )}
      </div>
    </Layout>
  );
};

export default PayementScreen;
