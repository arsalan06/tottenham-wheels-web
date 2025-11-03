// src/services/spacerService.js
// adjust path to your firebase config
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

const SPACERS_COLLECTION = "spacers";

// ✅ Add new spacer
export const addSpacer = async (data) => {
  try {
    const docRef = await addDoc(collection(db, SPACERS_COLLECTION), {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Error adding spacer:", error);
    throw error;
  }
};

// ✅ Update existing spacer
export const updateSpacer = async (id, data) => {
  try {
    const docRef = doc(db, SPACERS_COLLECTION, id);
    await updateDoc(docRef, { ...data, updatedAt: new Date() });
    return { id, ...data };
  } catch (error) {
    console.error("Error updating spacer:", error);
    throw error;
  }
};

// ✅ Get single spacer by ID
export const getSpacerById = async (id) => {
  try {
    const docRef = doc(db, SPACERS_COLLECTION, id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error getting spacer:", error);
    throw error;
  }
};

// ✅ Get all spacers
export const getAllSpacers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, SPACERS_COLLECTION));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching spacers:", error);
    throw error;
  }
};

// ✅ Delete spacer
export const deleteSpacer = async (id) => {
  try {
    const docRef = doc(db, SPACERS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting spacer:", error);
    throw error;
  }
};

export const updateSpacerQuantity = async (id, selectedQuantity) => {
  try {
    const tyreRef = doc(db, SPACERS_COLLECTION, id); // 'wheels' = collection
    const tyreSnap = await getDoc(tyreRef);

    if (!tyreSnap.exists()) {
      console.error("❌ tyre not found");
      return;
    }

    const currentQty = tyreSnap.data().quantity;

    if (currentQty <= 0) {
      console.warn("⚠️ No stock available");
      return;
    }

    await updateDoc(tyreRef, {
      quantity: currentQty - Number(selectedQuantity),
    });

    console.log("✅ Wheel quantity updated successfully");
  } catch (error) {
    console.error("❌ Error updating quantity:", error);
  }
};
