import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

// Environment variables for security (Usifiche funguo zako kwenye hardcoded string)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Singleton pattern ili kuzuia re-initialization (Professional standard)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore na Persistent Cache kwa ajili ya offline-first architecture
export const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
});

// Advanced Auth Persistence
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Auth Persistence Error:", error);
  });

export default app;