import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Box, Card } from "@mui/material";
// import { useDispatch, useSelector } from "../../redux/store";
// import { addCardData } from "../../redux/slice/addToCartSlice";
// import { useNavigate } from "react-router-dom";
const PaypalGateway = ({ total }) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { totalAmount } = useSelector((state) => state.addToCart);
  const user = {};
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
          {/* <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{ amount: { value: total } }],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                if (details) {
                  console.log("PayPal Checkout Success", details);
                }
              });
            }}
            onError={(err) => {
              if (err) {
                console.error("PayPal Checkout Error", err);
                // navigate("/pay-status/error");
              }
            }}
          /> */}
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: { value: total },

                    // ✅ Add dynamic user data here
                    custom_id: user?.orderId, // your custom order id
                    invoice_id: user?.invoiceId, // invoice id
                    description: `Payment by ${user?.name}`,

                    shipping: {
                      name: {
                        full_name: user?.name,
                      },
                      address: {
                        address_line_1: user?.address,
                        admin_area_2: user?.city,
                        admin_area_1: user?.state,
                        postal_code: user?.zip,
                        country_code: "US",
                      },
                    },

                    // If needed, payer info
                    payer: {
                      email_address: user?.email,
                      phone: {
                        phone_type: "MOBILE",
                        phone_number: { national_number: user?.phone },
                      },
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                console.log("SUCCESS:", details);
                console.log(
                  "Custom fields:",
                  details.purchase_units[0].custom_id
                );
                console.log("User email:", details.payer.email_address);
              });
            }}
          />
        </PayPalScriptProvider>
      </Card>
    </Box>
  );
};

export default PaypalGateway;
