// src/services/alloyWheelProtectorService.js
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const ALLOY_WHEEL_PROTECTORS_COLLECTION = "alloyWheelProtectors";

// ✅ Add new Alloy Wheel Protector
export const addAlloyWheelProtector = async (data) => {
  try {
    const docRef = await addDoc(
      collection(db, ALLOY_WHEEL_PROTECTORS_COLLECTION),
      {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    );
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Error adding Alloy Wheel Protector:", error);
    throw error;
  }
};

// ✅ Update existing Alloy Wheel Protector
export const updateAlloyWheelProtector = async (id, data) => {
  try {
    const docRef = doc(db, ALLOY_WHEEL_PROTECTORS_COLLECTION, id);
    await updateDoc(docRef, { ...data, updatedAt: new Date() });
    return { id, ...data };
  } catch (error) {
    console.error("Error updating Alloy Wheel Protector:", error);
    throw error;
  }
};

// ✅ Get single Alloy Wheel Protector by ID
export const getAlloyWheelProtectorById = async (id) => {
  try {
    const docRef = doc(db, ALLOY_WHEEL_PROTECTORS_COLLECTION, id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error getting Alloy Wheel Protector:", error);
    throw error;
  }
};

// ✅ Get all Alloy Wheel Protectors
export const getAllAlloyWheelProtectors = async () => {
  try {
    const querySnapshot = await getDocs(
      collection(db, ALLOY_WHEEL_PROTECTORS_COLLECTION)
    );
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching Alloy Wheel Protectors:", error);
    throw error;
  }
};

// ✅ Delete Alloy Wheel Protector
export const deleteAlloyWheelProtector = async (id) => {
  try {
    const docRef = doc(db, ALLOY_WHEEL_PROTECTORS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting Alloy Wheel Protector:", error);
    throw error;
  }
};

// ✅ Update Alloy Wheel Protector quantity
export const updateAlloyWheelProtectorQuantity = async (
  id,
  selectedQuantity
) => {
  try {
    const protectorRef = doc(db, ALLOY_WHEEL_PROTECTORS_COLLECTION, id);
    const protectorSnap = await getDoc(protectorRef);

    if (!protectorSnap.exists()) {
      console.error("❌ Alloy Wheel Protector not found");
      return;
    }

    const currentQty = protectorSnap.data().quantity;

    if (currentQty <= 0) {
      console.warn("⚠️ No stock available");
      return;
    }

    await updateDoc(protectorRef, {
      quantity: currentQty - Number(selectedQuantity),
    });

    console.log("✅ Alloy Wheel Protector quantity updated successfully");
  } catch (error) {
    console.error("❌ Error updating Alloy Wheel Protector quantity:", error);
  }
};
