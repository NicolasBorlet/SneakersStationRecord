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

  useEffect(() => {
    fetch("http://localhost:3000/payment", {
      method: "POST",
      body: JSON.stringify({
        amount: 1000,
        currency: "eur",
      }),
    })
      .then(async (result) => {
        const { clientSecret } = await result.json();
        setClientSecret(clientSecret);

        console.log(clientSecret);
      })
      .catch((err) => {
        console.log(err);
      });
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
