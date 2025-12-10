import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db, auth } from "../firebase";

export const placeOrder = async (ownerId, orderData) => {
  const orderId = uuidv4(); // each order gets unique id

  await setDoc(doc(db, "orders", ownerId, "userOrders", orderId), {
    ...orderData,
    orderId,
    ownerId,
    createdAt: new Date(),
    status: "Pending",
  });

  return orderId;
};

// export const getOrders = async (customerId) => {
//   const ordersRef = collection(db, "orders", customerId, "userOrders");
//   const snap = await getDocs(ordersRef);

//   return snap.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
// };

// export const mergeGuestOrdersToUser = async (userId) => {
//   const guestId = localStorage.getItem("guestId");
//   if (!guestId) return;

//   const guestOrdersRef = collection(db, "orders", guestId, "userOrders");
//   const guestOrders = await getDocs(guestOrdersRef);

//   if (guestOrders.empty) return;

//   const userOrdersRef = collection(db, "orders", userId, "userOrders");

//   for (let docSnap of guestOrders.docs) {
//     const newOrderId = uuidv4();

//     await setDoc(
//       doc(userOrdersRef, newOrderId),
//       {
//         ...docSnap.data(),
//         migratedFromGuest: guestId,
//         migratedAt: new Date(),
//       }
//     );

//     await deleteDoc(doc(guestOrdersRef, docSnap.id));
//   }

//   localStorage.removeItem("guestId");
// };
