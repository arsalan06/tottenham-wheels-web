import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  addCart: [],
  slectedQuantity: null,
  clientDetail: {},
  singleProductDetail: {},
  otherServices: [],
  totalAmount: null,
  paymentPlan: "",
  cardData: {},
  addServiceFee: false,
  fixedServiceFee: 18,
};

// export const getWorkflowDataAction = createAsyncThunk("workflow/getWorkflowDataAction", async () => {
//   try {
//     const response = await axiosInstance.get(`/shop/getAppointments`);
//     return response.data;
//   } catch (error) {
//     throw error.response.data.errorMessage;
//   }
// });
const addToCartSlice = createSlice({
  name: "addToCartSlice",
  initialState,
  reducers: {
    isAddService(state, action) {
      state.addServiceFee = action.payload;
    },
    addFixedServiceFee(state, action) {
      state.fixedServiceFee = action.payload;
    },
    addCardData(state, action) {
      state.cardData = action.payload;
    },
    addPaymentPlan(state, action) {
      state.paymentPlan = action.payload;
    },
    addtoCart(state, action) {
      state.addCart = action.payload;
    },
    addSelectedQuantity(state, action) {
      state.slectedQuantity = action.payload;
    },
    addClientAddress(state, action) {
      state.clientDetail = action.payload;
    },
    addSingleProductDetail(state, action) {
      state.singleProductDetail = action.payload;
    },
    addOtherServices(state, action) {
      state.otherServices = action.payload;
    },
    addTotalAmount(state, action) {
      state.totalAmount = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getWorkflowDataAction.fulfilled, (state, action) => {
  //     console.log("getWorkflowDataAction", action.payload);
  //     state.workflowData = action.payload.data;
  //   });
  // }
});
export const {
  addtoCart,
  addSelectedQuantity,
  addClientAddress,
  addSingleProductDetail,
  addOtherServices,
  addTotalAmount,
  addPaymentPlan,
  addCardData,
  isAddService,
  addFixedServiceFee,
} = addToCartSlice.actions;
export default addToCartSlice.reducer;

// export function getWorkflowDataAction() {
//   return async () => {
//     try {
//       const response = await axiosInstance.get(`/shop/getAppointments`);

//       dispatch(slice.actions.getWorkflowDataSuccess(response.data.data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
