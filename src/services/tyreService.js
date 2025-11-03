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

const COLLECTION_NAME = "tyres";

export const tyreService = {
  // Add a new Tyres
  async addTyre(tyreData) {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...tyreData,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      return docRef.id;
    } catch (error) {
      console.error("Error adding tyre:", error);
      throw error;
    }
  },

  // Get all wheels
  async getTyres() {
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
      console.error("Error getting tyres:", error);
      throw error;
    }
  },

  // Update a tyre
  async updateTyre(id, tyreData) {
    try {
      const tyreRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(tyreRef, {
        ...tyreData,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error("Error updating tyre:", error);
      throw error;
    }
  },

  // Delete a tyre
  async deleteTyre(id) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
    } catch (error) {
      console.error("Error deleting tyre:", error);
      throw error;
    }
  },
  // Get a single tyre by ID
  async getTyreById(id) {
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
        throw new Error("No such tyre exists!");
      }
    } catch (error) {
      console.error("Error getting tyre by ID:", error);
      throw error;
    }
  },

  async updateTyreQuantity(tyreId, selectedQuantity) {
    try {
      const tyreRef = doc(db, COLLECTION_NAME, tyreId); // 'wheels' = collection
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
  },
};
