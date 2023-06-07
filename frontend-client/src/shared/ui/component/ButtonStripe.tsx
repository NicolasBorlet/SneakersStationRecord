// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// const StripePaymentButton = ({ cartItems }) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handlePayment = async () => {
//     // Read the client secret from the button element
//     const stripePaymentButton = document.getElementById(
//       "stripe-payment-button"
//     );
//     const clientSecret =
//       stripePaymentButton?.getAttribute("data-client-secret");

//     // Confirm the payment with Stripe
//     const result = await stripe?.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements?.getElement(CardElement),
//       },
//     });

//     if (result?.error) {
//       console.error(result?.error.message);
//     } else {
//       console.log("Payment succeeded:", result?.paymentIntent);
//       // Handle successful payment
//     }
//   };

//   return (
//     <button
//       onClick={handlePayment}
//       id="stripe-payment-button" // Add an id to the button element
//       className="bg-[#000000] text-[#FFFFFF] px-[20px] py-[10px] rounded-[5px] mt-5"
//     >
//       Payer
//     </button>
//   );
// };

// export default StripePaymentButton;
