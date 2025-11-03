// src/services/centreCabsService.js
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

const CENTRE_CABS_COLLECTION = "centreCabs";

// ✅ Add new Centre Cab
export const addCentreCab = async (data) => {
  try {
    const docRef = await addDoc(collection(db, CENTRE_CABS_COLLECTION), {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Error adding Centre Cab:", error);
    throw error;
  }
};

// ✅ Update existing Centre Cab
export const updateCentreCab = async (id, data) => {
  try {
    const docRef = doc(db, CENTRE_CABS_COLLECTION, id);
    await updateDoc(docRef, { ...data, updatedAt: new Date() });
    return { id, ...data };
  } catch (error) {
    console.error("Error updating Centre Cab:", error);
    throw error;
  }
};

// ✅ Get single Centre Cab by ID
export const getCentreCabById = async (id) => {
  try {
    const docRef = doc(db, CENTRE_CABS_COLLECTION, id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error getting Centre Cab:", error);
    throw error;
  }
};

// ✅ Get all Centre Cabs
export const getAllCentreCabs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, CENTRE_CABS_COLLECTION));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching Centre Cabs:", error);
    throw error;
  }
};

// ✅ Delete Centre Cab
export const deleteCentreCab = async (id) => {
  try {
    const docRef = doc(db, CENTRE_CABS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting Centre Cab:", error);
    throw error;
  }
};

// ✅ Update Centre Cab quantity
export const updateCentreCabQuantity = async (id, selectedQuantity) => {
  try {
    const cabRef = doc(db, CENTRE_CABS_COLLECTION, id);
    const cabSnap = await getDoc(cabRef);

    if (!cabSnap.exists()) {
      console.error("❌ Centre Cab not found");
      return;
    }

    const currentQty = cabSnap.data().quantity;

    if (currentQty <= 0) {
      console.warn("⚠️ No stock available");
      return;
    }

    await updateDoc(cabRef, {
      quantity: currentQty - Number(selectedQuantity),
      updatedAt: new Date(),
    });

    console.log("✅ Centre Cab quantity updated successfully");
  } catch (error) {
    console.error("❌ Error updating Centre Cab quantity:", error);
  }
};
