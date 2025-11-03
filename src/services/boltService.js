// src/services/boltService.js
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

const BOLTS_COLLECTION = "bolts";

// ✅ Add new bolt
export const addBolt = async (data) => {
  try {
    const docRef = await addDoc(collection(db, BOLTS_COLLECTION), {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Error adding bolt:", error);
    throw error;
  }
};

// ✅ Update existing bolt
export const updateBolt = async (id, data) => {
  try {
    const docRef = doc(db, BOLTS_COLLECTION, id);
    await updateDoc(docRef, { ...data, updatedAt: new Date() });
    return { id, ...data };
  } catch (error) {
    console.error("Error updating bolt:", error);
    throw error;
  }
};

// ✅ Get single bolt by ID
export const getBoltById = async (id) => {
  try {
    const docRef = doc(db, BOLTS_COLLECTION, id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error getting bolt:", error);
    throw error;
  }
};

// ✅ Get all bolts
export const getAllBolts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, BOLTS_COLLECTION));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching bolts:", error);
    throw error;
  }
};

// ✅ Delete bolt
export const deleteBolt = async (id) => {
  try {
    const docRef = doc(db, BOLTS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting bolt:", error);
    throw error;
  }
};

// ✅ Update bolt quantity
export const updateBoltQuantity = async (id, selectedQuantity) => {
  try {
    const boltRef = doc(db, BOLTS_COLLECTION, id);
    const boltSnap = await getDoc(boltRef);

    if (!boltSnap.exists()) {
      console.error("❌ Bolt not found");
      return;
    }

    const currentQty = boltSnap.data().quantity;

    if (currentQty <= 0) {
      console.warn("⚠️ No stock available");
      return;
    }

    await updateDoc(boltRef, {
      quantity: currentQty - Number(selectedQuantity),
    });

    console.log("✅ Bolt quantity updated successfully");
  } catch (error) {
    console.error("❌ Error updating bolt quantity:", error);
  }
};
