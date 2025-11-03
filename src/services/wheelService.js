import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  Timestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
// import { db } from "@/lib/firebase";
//   import { Wheel } from "@/types/wheel";

const COLLECTION_NAME = "wheels";

export const wheelService = {
  // Add a new wheel
  async addWheel(wheelData) {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...wheelData,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      return docRef.id;
    } catch (error) {
      console.error("Error adding wheel:", error);
      throw error;
    }
  },

  // Get all wheels
  async getWheels() {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate(),
      }));
    } catch (error) {
      console.error("Error getting wheels:", error);
      throw error;
    }
  },

  // Update a wheel
  async updateWheel(id, wheelData) {
    try {
      const wheelRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(wheelRef, {
        ...wheelData,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error("Error updating wheel:", error);
      throw error;
    }
  },

  // Delete a wheel
  async deleteWheel(id) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
    } catch (error) {
      console.error("Error deleting wheel:", error);
      throw error;
    }
  },
  // Get a single wheel by ID
  async getWheelById(id) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
          createdAt: docSnap.data().createdAt?.toDate(),
          updatedAt: docSnap.data().updatedAt?.toDate(),
        };
      } else {
        throw new Error("No such wheel exists!");
      }
    } catch (error) {
      console.error("Error getting wheel by ID:", error);
      throw error;
    }
  },
  // update wheel quantity by ID
  async updateWheelQuantity(wheelId, selectedQuantity) {
    try {
      const wheelRef = doc(db, "wheels", wheelId); // 'wheels' = collection
      const wheelSnap = await getDoc(wheelRef);

      if (!wheelSnap.exists()) {
        console.error("❌ Wheel not found");
        return;
      }

      const currentQty = wheelSnap.data().quantity;

      if (currentQty <= 0) {
        console.warn("⚠️ No stock available");
        return;
      }

      await updateDoc(wheelRef, {
        quantity: currentQty - Number(selectedQuantity),
      });

      console.log("✅ Wheel quantity updated successfully");
    } catch (error) {
      console.error("❌ Error updating quantity:", error);
    }
  },
};
