import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  query,
  orderBy,
  Timestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION_NAME = "addresses";

export const addressService = {
  // Add a new Tyres
  async addBooking(bookingData) {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...bookingData,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      return docRef.id;
    } catch (error) {
      console.error("Error adding tyre:", error);
      throw error;
    }
  },

  // Get all Bookings
  async getBooking() {
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
  // Update a booking
  async updateBooking(id, bookingData) {
    try {
      const bookingRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(bookingRef, {
        ...bookingData,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error("Error updating booking:", error);
      throw error;
    }
  },

  // ✅ Get booking by ID
  async getBookingById(id) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error("Booking not found");
      }

      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate(),
        updatedAt: docSnap.data().updatedAt?.toDate(),
      };
    } catch (error) {
      console.error("Error getting booking by ID:", error);
      throw error;
    }
  },
};
