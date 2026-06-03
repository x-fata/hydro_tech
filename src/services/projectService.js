import { db } from './firebaseConfig';
import { collection, getDocs, addDoc, query, orderBy, doc, getDoc } from 'firebase/firestore';

// Professional Data Fetching Pattern
export const projectService = {
  // Kusoma miradi yote
  async getAllProjects() {
    try {
      const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching projects: ", error);
      throw error;
    }
  },

  // Kuongeza Project mpya
  async addProject(projectData) {
    try {
      return await addDoc(collection(db, "projects"), {
        ...projectData,
        createdAt: new Date()
      });
    } catch (error) {
      console.error("Error adding project: ", error);
      throw error;
    }
  }
};