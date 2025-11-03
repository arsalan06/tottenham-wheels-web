// src/services/adapterService.js
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

const ADAPTERS_COLLECTION = "adapters";

// ✅ Add new adapter
export const addAdapter = async (data) => {
  try {
    const docRef = await addDoc(collection(db, ADAPTERS_COLLECTION), {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Error adding adapter:", error);
    throw error;
  }
};

// ✅ Update existing adapter
export const updateAdapter = async (id, data) => {
  try {
    const docRef = doc(db, ADAPTERS_COLLECTION, id);
    await updateDoc(docRef, { ...data, updatedAt: new Date() });
    return { id, ...data };
  } catch (error) {
    console.error("Error updating adapter:", error);
    throw error;
  }
};

// ✅ Get single adapter by ID
export const getAdapterById = async (id) => {
  try {
    const docRef = doc(db, ADAPTERS_COLLECTION, id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error getting adapter:", error);
    throw error;
  }
};

// ✅ Get all adapters
export const getAllAdapters = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, ADAPTERS_COLLECTION));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching adapters:", error);
    throw error;
  }
};

// ✅ Delete adapter
export const deleteAdapter = async (id) => {
  try {
    const docRef = doc(db, ADAPTERS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting adapter:", error);
    throw error;
  }
};

// ✅ Update adapter quantity
export const updateAdapterQuantity = async (id, selectedQuantity) => {
  try {
    const adapterRef = doc(db, ADAPTERS_COLLECTION, id);
    const adapterSnap = await getDoc(adapterRef);

    if (!adapterSnap.exists()) {
      console.error("❌ Adapter not found");
      return;
    }

    const currentQty = adapterSnap.data().quantity;

    if (currentQty <= 0) {
      console.warn("⚠️ No stock available");
      return;
    }

    await updateDoc(adapterRef, {
      quantity: currentQty - Number(selectedQuantity),
    });

    console.log("✅ Adapter quantity updated successfully");
  } catch (error) {
    console.error("❌ Error updating adapter quantity:", error);
  }
};
