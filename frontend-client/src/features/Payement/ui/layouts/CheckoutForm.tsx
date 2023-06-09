import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { success } from "../../../../shared/ui/component/ToastComponent";

const CheckoutForm = ({ clientSecret }: any) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // @ts-ignore
    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        // @ts-ignore
        card: elements?.getElement(CardElement),
      },
    });

    if (error) {
      console.log(error);
    } else {
      setTimeout(async () => {
        localStorage.removeItem("cartItems");
        window.location.href = "/";
        success({
          message: "Paiement effectué avec succès",
        });
      }, 500);
    }
  };

  return (
    <div className="px-[200px]">
      <form onSubmit={handleSubmit}>
        <div className="border-[1px] border-[#424770] p-3 rounded-md">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },

                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-[#000000] text-[#FFFFFF] px-[20px] py-[10px] rounded-[5px] mt-5"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
