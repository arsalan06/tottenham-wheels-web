import React, { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { Box, Button, Card, CircularProgress, Typography } from "@mui/material";
// import cardImage from "../../assets/images/card3.jpeg";
import { useDispatch, useSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../../constant";
import { addCardData } from "../../redux/slice/addToCartSlice";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#32325d",
      fontFamily: "Poppins, sans-serif",
      letterSpacing: "0.025em",
      "::placeholder": {
        color: "#aab7c4",
      },
      padding: "10px 12px",
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
  hidePostalCode: true,
};

export default function StripeForm() {
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { totalAmount } = useSelector((state) => state.addToCart);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${BaseUrl}/create-payment-intent`,
        { amount: totalAmount * 100 } // $55.99 in cents
      );

      const clientSecret = data.clientSecret;
      if (!clientSecret) throw new Error("Missing clientSecret from backend");

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });
      const saved = await axios.post(`${BaseUrl}/save-card`, {
        paymentMethodId: result.paymentIntent.payment_method,
      });
      dispatch(addCardData(saved?.data));

      if (result.error) {
        navigate("/pay-status/error");
      } else if (result.paymentIntent.status === "succeeded") {
        // setMessage("✅ Payment succeeded!");
        navigate("/pay-status/succuss");
      }
      // Step 3: Save card info (optional)
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }

    setLoading(false);
  };

  return (
    <Card
      sx={{
        // width: "30%",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* <Box sx={{ width: "100%", height: "220px" }}>
        <img
          src={cardImage}
          alt="card"
          style={{ objectFit: "cover", width: "100%", height: "220px" }}
        />
      </Box> */}

      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", padding: "10px 25px", height: "auto" }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Card Number
            </Typography>
            <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
          </div>

          <div>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Expiry Date
            </Typography>
            <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
          </div>

          <div>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              CVC
            </Typography>
            <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
          </div>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!stripe || loading}
            sx={{ mt: 3 }}
          >
            {loading ? (
              <CircularProgress sx={{ color: "#fff" }} size={26} />
            ) : (
              `Pay ${totalAmount}`
            )}
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{ mt: 2, color: message.includes("✅") ? "green" : "red" }}
        >
          {message}
        </Typography>
      </form>
    </Card>
  );
}
