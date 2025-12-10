import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Box } from "@mui/material";
import StripeForm from "./StripeForm";

// Load public key
const stripePromise = loadStripe(
  "pk_test_51RqYedAXhwwIKlz7PuhvKO0Qw2zfiADg7Cj94qttk113T0VDwwdKTEhNyvbxBcOxPQrJXA1OvDkQL3Vwrf30NkiN00d8ATuBIZ"
); // Use your public key

function StripeWrapper({ total }) {
  return (
    <Box>
      <Elements stripe={stripePromise}>
        <StripeForm total={total} />
      </Elements>
    </Box>
  );
}
export default StripeWrapper;
