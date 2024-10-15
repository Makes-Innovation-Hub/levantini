import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  getFireBaseAPI,
  getDomain,
  getProjectID,
  getBucket,
  getSenderID,
  getAppID,
} from "../../utils/envUtils";

const firebaseConfig = {
  apiKey: getFireBaseAPI(),
  authDomain: getDomain(),
  projectId: getProjectID(),
  storageBucket: getBucket(),
  messagingSenderId: getSenderID(),
  appId: getAppID(),
};

let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error("Error initializing Firebase:", error);
  throw error;
}

export const auth = getAuth(app);
export const db = getFirestore(app);
