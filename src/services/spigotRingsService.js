// src/services/spigotRingsService.js
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

const SPIGOT_RINGS_COLLECTION = "spigotRings";

// ✅ Add new Spigot Ring
export const addSpigotRing = async (data) => {
  try {
    const docRef = await addDoc(collection(db, SPIGOT_RINGS_COLLECTION), {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Error adding spigot ring:", error);
    throw error;
  }
};

// ✅ Update existing Spigot Ring
export const updateSpigotRing = async (id, data) => {
  try {
    const docRef = doc(db, SPIGOT_RINGS_COLLECTION, id);
    await updateDoc(docRef, { ...data, updatedAt: new Date() });
    return { id, ...data };
  } catch (error) {
    console.error("Error updating spigot ring:", error);
    throw error;
  }
};

// ✅ Get single Spigot Ring by ID
export const getSpigotRingById = async (id) => {
  try {
    const docRef = doc(db, SPIGOT_RINGS_COLLECTION, id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error getting spigot ring:", error);
    throw error;
  }
};

// ✅ Get all Spigot Rings
export const getAllSpigotRings = async () => {
  try {
    const querySnapshot = await getDocs(
      collection(db, SPIGOT_RINGS_COLLECTION)
    );
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching spigot rings:", error);
    throw error;
  }
};

// ✅ Delete Spigot Ring
export const deleteSpigotRing = async (id) => {
  try {
    const docRef = doc(db, SPIGOT_RINGS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting spigot ring:", error);
    throw error;
  }
};

// ✅ Update Spigot Ring quantity
export const updateSpigotRingQuantity = async (id, selectedQuantity) => {
  try {
    const ringRef = doc(db, SPIGOT_RINGS_COLLECTION, id);
    const ringSnap = await getDoc(ringRef);

    if (!ringSnap.exists()) {
      console.error("❌ Spigot Ring not found");
      return;
    }

    const currentQty = ringSnap.data().quantity;

    if (currentQty <= 0) {
      console.warn("⚠️ No stock available");
      return;
    }

    await updateDoc(ringRef, {
      quantity: currentQty - Number(selectedQuantity),
    });

    console.log("✅ Spigot Ring quantity updated successfully");
  } catch (error) {
    console.error("❌ Error updating spigot ring quantity:", error);
  }
};
