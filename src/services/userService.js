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
  collectionGroup,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION_NAME = "users";

export const userService = {
  // Add a new Tyres
  async addUsers(addUserData) {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...addUserData,
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
  async getUsers() {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        // createdAt: doc.data().createdAt?.toDate(),
        // updatedAt: doc.data().updatedAt?.toDate(),
      }));
    } catch (error) {
      console.error("Error getting users:", error);
      throw error;
    }
  },
  async getUserLogs() {
    try {
      // Query all "logs" subcollections ordered by createdAt descending
      const logsRef = query(
        collectionGroup(db, "logs"),
        orderBy("createdAt", "desc") // latest logs first
      );

      const snapshot = await getDocs(logsRef);

      snapshot.forEach((doc) => {
        console.log("Log:", doc.id, doc.data());
      });

      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.() || null, // convert Firestore timestamp
      }));
    } catch (error) {
      console.error("Error fetching logs:", error);
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
  async getUserRoleByEmail(email) {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error("No user found with this email.");
    }

    // Assuming emails are unique, get the first match
    const userDoc = querySnapshot.docs[0];
    return {
      id: userDoc.id,
      ...userDoc.data(),
    };
  },
};
