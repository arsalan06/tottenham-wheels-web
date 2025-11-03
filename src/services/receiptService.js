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
  limit,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION_NAME = "receipts";

export const receiptService = {
  // Add a new Tyres
  async addReceipt(receiptData) {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...receiptData,
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
  async getRecentReceipt() {
    try {
      const receiptRef = collection(db, COLLECTION_NAME);

      const q = query(
        receiptRef,
        orderBy("createdAt", "desc"), // sort by most recent
        limit(10)
      );

      const querySnapshot = await getDocs(q);

      const recentreceipts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return recentreceipts;
    } catch (error) {
      console.error("Error fetching recent wheels:", error);
      throw error; // rethrow if you want the calling code to handle it
    }
  },
  async updateUser(id, receiptData) {
    try {
      const tyreRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(tyreRef, {
        ...receiptData,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error("Error updating tyre:", error);
      throw error;
    }
  },

  // Delete a tyre
  async deleteUser(id) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
    } catch (error) {
      console.error("Error deleting tyre:", error);
      throw error;
    }
  },
  // Get a single tyre by ID
  async getAddressByEmail(email) {
    try {
      const docRef = doc(db, "addresses", email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        };
      } else {
        throw new Error("No such tyre exists!");
      }
    } catch (error) {
      console.error("Error getting tyre by ID:", error);
      throw error;
    }
  },
  async getReceiptByEmail(email) {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where("clientMail", "==", email.trim())
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error(`No receipt found for email: ${email}`);
      }

      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error getting receipt by email:", error);
      throw error;
    }
  },
};
