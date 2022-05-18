import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Payments() {
  const publishableKey =
    "pk_test_51KxpMIBFCXWWOq3SvzupobTqROzs7dNvMgM2AGvrKkfANL2gBSWJXicTDyeDBeP94WHilNM3QM9nHQLLq92vQ5kC00nEVIbUGW";

  var priceForStripe = 0;
  const { id } = useParams();

  const roomPriceInDollars = () => {
    if (id == "Deluxe King Room") {
      priceForStripe = 236;
    } else if (id == "Premier King Room") {
      priceForStripe = 2550;
    } else if (id == "Signature King Room") {
      priceForStripe = 3150;
    } else {
      priceForStripe = 0;
    }
  };

  roomPriceInDollars();

  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "http://localhost:8000/payments",
        method: "post",
        data: {
          amount: priceForStripe * 100,
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
        <br />
        <br />
        <h3>Pre-payments are required for all types of King Rooms !</h3>
        <br />
        <br />
        <StripeCheckout
          stripeKey={publishableKey}
          label="Pay Now"
          name="Pay with credit card"
          billingAddress
          shippingAddress
          amount={priceForStripe * 100}
          description={`Your total is $${priceForStripe * 100}`}
          token={payNow}
        />
      </center>
    </div>
  );
}
