import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

export default function Payments() {
  const publishableKey =
    "pk_test_51KxpMIBFCXWWOq3SvzupobTqROzs7dNvMgM2AGvrKkfANL2gBSWJXicTDyeDBeP94WHilNM3QM9nHQLLq92vQ5kC00nEVIbUGW";

  const [product, setProduct] = useState({
    name: "Deluxe Room",
    price: 20,
  });
  const priceForStripe = product.price * 100;

  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "http://localhost:8000/payments",
        method: "post",
        data: {
          amount: product.price * 100,
          token,
        },
      });
      if (response.status === 200) {
        console.log("Your payment is sucessful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <center>
        <StripeCheckout
          stripeKey={publishableKey}
          label="Pay Now"
          name="Pay with credit card"
          billingAddress
          shippingAddress
          amount={priceForStripe}
          description={`Your total is $${product.price}`}
          token={payNow}
        />
      </center>
    </div>
  );
}
