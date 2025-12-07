import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Box, Card } from "@mui/material";
// import { useDispatch, useSelector } from "../../redux/store";
// import { addCardData } from "../../redux/slice/addToCartSlice";
// import { useNavigate } from "react-router-dom";
const PaypalGateway = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { totalAmount } = useSelector((state) => state.addToCart);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          padding: "18px 20px",
          borderRadius: "12px",
          width: "100%",
        }}
      >
        <PayPalScriptProvider
          options={{
            "client-id":
              "AWZUyr8zk8OPVs3Z7KvOokxTgt7Z5KuDuNdWL74w806_akjvTcknmHR7kh3q9n6NzWuIrQiRPpiMtApT",
          }}
        >
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{ amount: { value: 220 } }],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                if (details) {
                  console.log("PayPal Checkout Success", details);
                  // dispatch(addCardData(details));
                  // navigate("/pay-status/succuss");
                }
              });
            }}
            onError={(err) => {
              if (err) {
                console.error("PayPal Checkout Error", err);
                // navigate("/pay-status/error");
              }
            }}
          />
        </PayPalScriptProvider>
      </Card>
    </Box>
  );
};

export default PaypalGateway;
