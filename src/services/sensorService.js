// src/services/sensorService.js
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

const SENSORS_COLLECTION = "sensors";

// ✅ Add new sensor
export const addSensor = async (data) => {
  try {
    const docRef = await addDoc(collection(db, SENSORS_COLLECTION), {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Error adding sensor:", error);
    throw error;
  }
};

// ✅ Update existing sensor
export const updateSensor = async (id, data) => {
  try {
    const docRef = doc(db, SENSORS_COLLECTION, id);
    await updateDoc(docRef, { ...data, updatedAt: new Date() });
    return { id, ...data };
  } catch (error) {
    console.error("Error updating sensor:", error);
    throw error;
  }
};

// ✅ Get single sensor by ID
export const getSensorById = async (id) => {
  try {
    const docRef = doc(db, SENSORS_COLLECTION, id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error getting sensor:", error);
    throw error;
  }
};

// ✅ Get all sensors
export const getAllSensors = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, SENSORS_COLLECTION));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching sensors:", error);
    throw error;
  }
};

// ✅ Delete sensor
export const deleteSensor = async (id) => {
  try {
    const docRef = doc(db, SENSORS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting sensor:", error);
    throw error;
  }
};

// ✅ Update sensor quantity
export const updateSensorQuantity = async (id, selectedQuantity) => {
  try {
    const sensorRef = doc(db, SENSORS_COLLECTION, id);
    const sensorSnap = await getDoc(sensorRef);

    if (!sensorSnap.exists()) {
      console.error("❌ Sensor not found");
      return;
    }

    const currentQty = sensorSnap.data().quantity;

    if (currentQty <= 0) {
      console.warn("⚠️ No stock available");
      return;
    }

    await updateDoc(sensorRef, {
      quantity: currentQty - Number(selectedQuantity),
    });

    console.log("✅ Sensor quantity updated successfully");
  } catch (error) {
    console.error("❌ Error updating sensor quantity:", error);
  }
};
