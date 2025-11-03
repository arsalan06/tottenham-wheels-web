// src/services/boltCoverService.js
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

const BOLT_COVERS_COLLECTION = "boltCovers";

// ✅ Add new Nut/Bolt Cover
export const addBoltCover = async (data) => {
  try {
    const docRef = await addDoc(collection(db, BOLT_COVERS_COLLECTION), {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Error adding Nut/Bolt Cover:", error);
    throw error;
  }
};

// ✅ Update existing Nut/Bolt Cover
export const updateBoltCover = async (id, data) => {
  try {
    const docRef = doc(db, BOLT_COVERS_COLLECTION, id);
    await updateDoc(docRef, { ...data, updatedAt: new Date() });
    return { id, ...data };
  } catch (error) {
    console.error("Error updating Nut/Bolt Cover:", error);
    throw error;
  }
};

// ✅ Get single Nut/Bolt Cover by ID
export const getBoltCoverById = async (id) => {
  try {
    const docRef = doc(db, BOLT_COVERS_COLLECTION, id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error getting Nut/Bolt Cover:", error);
    throw error;
  }
};

// ✅ Get all Nut/Bolt Covers
export const getAllBoltCovers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, BOLT_COVERS_COLLECTION));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching Nut/Bolt Covers:", error);
    throw error;
  }
};

// ✅ Delete Nut/Bolt Cover
export const deleteBoltCover = async (id) => {
  try {
    const docRef = doc(db, BOLT_COVERS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting Nut/Bolt Cover:", error);
    throw error;
  }
};

// ✅ Update Nut/Bolt Cover quantity
export const updateBoltCoverQuantity = async (id, selectedQuantity) => {
  try {
    const coverRef = doc(db, BOLT_COVERS_COLLECTION, id);
    const coverSnap = await getDoc(coverRef);

    if (!coverSnap.exists()) {
      console.error("❌ Nut/Bolt Cover not found");
      return;
    }

    const currentQty = coverSnap.data().quantity;

    if (currentQty <= 0) {
      console.warn("⚠️ No stock available");
      return;
    }

    await updateDoc(coverRef, {
      quantity: currentQty - Number(selectedQuantity),
    });

    console.log("✅ Nut/Bolt Cover quantity updated successfully");
  } catch (error) {
    console.error("❌ Error updating Nut/Bolt Cover quantity:", error);
  }
};
