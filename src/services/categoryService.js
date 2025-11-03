import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const COLLECTION_NAME = "categories";

const storage = getStorage();
export const categoryService = {
  async uploadImage(file, path) {
    console.log("Uploading file:", file);
    if (!file) return null;

    const imageRef = ref(storage, path);

    // ✅ Wait for the upload to complete
    const snapshot = await uploadBytes(imageRef, file);

    // ✅ Get the download URL
    const url = await getDownloadURL(snapshot.ref);

    console.log("Uploaded image URL:", url);
    return url; // ✅ Return it so caller can use it
  },

  /** Deletes an image from Firebase Storage */
  async deleteImage(imageUrl) {
    if (!imageUrl) return;
    const storageRef = ref(storage, imageUrl);
    await deleteObject(storageRef).catch((err) =>
      console.warn("Image already deleted or not found:", err)
    );
  },
  async addCategoryWithModels(categoryData, models) {
    try {
      let categoryImageUrl = null;

      // STEP 1: Upload category image only if it's a File, not a URL
      if (categoryData.image) {
        if (
          typeof categoryData.image === "string" &&
          categoryData.image.startsWith("http")
        ) {
          categoryImageUrl = categoryData.image; // already uploaded
        } else {
          categoryImageUrl = await this.uploadImage(
            categoryData.image,
            `categories/${Date.now()}_${categoryData.image.name}`
          );
        }
      }
      // STEP 2: Save category
      const categoryRef = await addDoc(collection(db, COLLECTION_NAME), {
        name: categoryData.name || "",
        image: categoryImageUrl || null, // fallback to null
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });

      console.log("Category saved with ID:", categoryRef.id);

      // STEP 3: Save models in subcollection
      const modelsCollectionRef = collection(
        db,
        `${COLLECTION_NAME}/${categoryRef.id}/models`
      );

      const modelPromises = models.map(async (model) => {
        let modelImageUrl = null;

        if (model.image) {
          if (
            typeof model.image === "string" &&
            model.image.startsWith("http")
          ) {
            modelImageUrl = model.image;
          } else {
            modelImageUrl = await this.uploadImage(
              model.image,
              `models/${Date.now()}_${model.image.name}`
            );
          }
        }

        return addDoc(modelsCollectionRef, {
          name: model.name || "",
          years: model.years || [],
          // engine: model.engine || [],
          type: model.type || [],
          image: modelImageUrl || null,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        });
      });

      await Promise.all(modelPromises);

      console.log("All models saved successfully.");
      return categoryRef.id;
    } catch (error) {
      console.error("Error saving category and models:", error);
      throw error;
    }
  },
  async getAllCategoriesWithModels() {
    try {
      const categoriesRef = collection(db, COLLECTION_NAME);
      const categoriesSnapshot = await getDocs(categoriesRef);

      const categories = [];

      // Loop through each category document
      for (const categoryDoc of categoriesSnapshot.docs) {
        const categoryData = categoryDoc.data();

        // Reference to models subcollection
        const modelsRef = collection(
          db,
          `${COLLECTION_NAME}/${categoryDoc.id}/models`
        );
        const modelsSnapshot = await getDocs(modelsRef);

        // Map through models
        const models = modelsSnapshot.docs.map((modelDoc) => ({
          id: modelDoc.id,
          ...modelDoc.data(),
        }));

        // Push complete category object with models
        categories.push({
          id: categoryDoc.id,
          ...categoryData,
          models,
        });
      }

      return categories;
    } catch (error) {
      console.error("Error fetching categories with models:", error);
      throw error;
    }
  },

  async updateCategoryWithModels(categoryId, categoryData, models) {
    try {
      // STEP 1: Upload category image if it's a new File, else use existing URL
      let categoryImageUrl = categoryData.image || null;

      if (categoryData.image && typeof categoryData.image !== "string") {
        // It's a new file, so upload it
        categoryImageUrl = await this.uploadImage(
          categoryData.image,
          `categories/${Date.now()}_${categoryData.image.name}`
        );
      }

      // STEP 2: Update category document
      const categoryRef = doc(db, COLLECTION_NAME, categoryId);
      await updateDoc(categoryRef, {
        name: categoryData.name || "",
        image: categoryImageUrl,
        updatedAt: Timestamp.now(),
      });

      console.log(`Category "${categoryData.name}" updated successfully.`);

      // STEP 3: Get existing models from Firestore
      const modelsCollectionRef = collection(
        db,
        `${COLLECTION_NAME}/${categoryId}/models`
      );
      const existingModelsSnapshot = await getDocs(modelsCollectionRef);

      const existingModels = existingModelsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const existingModelIds = existingModels.map((m) => m.id);

      // STEP 4: Loop through provided models from UI
      const updatedModelIds = [];

      for (const model of models) {
        let modelImageUrl = model.image || null;

        // Upload model image if it's a new file
        if (model.image && typeof model.image !== "string") {
          modelImageUrl = await this.uploadImage(
            model.image,
            `models/${Date.now()}_${model.image.name}`
          );
        }

        if (model.id && existingModelIds.includes(model.id)) {
          // 4A: Update existing model
          const modelRef = doc(
            db,
            `${COLLECTION_NAME}/${categoryId}/models`,
            model.id
          );
          await updateDoc(modelRef, {
            name: model.name || "",
            years: model.years || [],
            // engine: model.engine || [],
            type: model.type || [],
            image: modelImageUrl || null,
            updatedAt: Timestamp.now(),
          });
          updatedModelIds.push(model.id);
        } else {
          // 4B: Add new model
          const newModelRef = await addDoc(modelsCollectionRef, {
            name: model.name || "",
            years: model.years || [],
            // engine: model.engine || [],
            type: model.type || [],
            image: modelImageUrl || null,
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
          });
          updatedModelIds.push(newModelRef.id);
        }
      }

      // STEP 5: Delete models that are no longer present
      for (const existingModel of existingModels) {
        if (!updatedModelIds.includes(existingModel.id)) {
          const modelRef = doc(
            db,
            `${COLLECTION_NAME}/${categoryId}/models`,
            existingModel.id
          );
          await deleteDoc(modelRef);
          console.log(`Deleted model: ${existingModel.name}`);
        }
      }

      console.log("Category and models updated successfully.");
      return categoryId;
    } catch (error) {
      console.error("Error updating category and models:", error);
      throw error;
    }
  },
  async deleteCategoryWithModels(categoryId) {
    try {
      if (!categoryId) {
        throw new Error("Category ID is required to delete.");
      }

      console.log("Starting deletion for category:", categoryId);

      // STEP 1: Get reference to the models subcollection
      const modelsCollectionRef = collection(
        db,
        `${COLLECTION_NAME}/${categoryId}/models`
      );

      // Fetch all models
      const modelsSnapshot = await getDocs(modelsCollectionRef);

      if (!modelsSnapshot.empty) {
        console.log(`Found ${modelsSnapshot.size} models to delete...`);

        // STEP 2: Delete each model
        const deleteModelPromises = modelsSnapshot.docs.map((modelDoc) =>
          deleteDoc(modelDoc.ref)
        );

        await Promise.all(deleteModelPromises);
        console.log("All models deleted successfully.");
      } else {
        console.log("No models found for this category.");
      }

      // STEP 3: Delete the category itself
      await deleteDoc(doc(db, COLLECTION_NAME, categoryId));
      console.log("Category deleted successfully!");

      return true;
    } catch (error) {
      console.error("Error deleting category and models:", error);
      throw error;
    }
  },
};
