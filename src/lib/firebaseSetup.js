import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireBaseAPI } from "../utils/envUtils";
import { getDomain } from "../utils/envUtils";
import { getProjectID } from "../utils/envUtils";
import { getBucket } from "../utils/envUtils";
import { getSenderID } from "../utils/envUtils";
import { getAppID } from "../utils/envUtils";
const fireAPI = getFireBaseAPI();
const domain = getDomain();
const ProjectID = getProjectID();
const Bucket = getBucket();
const senderID = getSenderID();
const IDApp = getAppID();
const firebaseConfig = {
  apiKey: fireAPI,
  authDomain: domain,
  projectId: ProjectID,
  storageBucket: Bucket,
  messagingSenderId: senderID,
  appId: IDApp,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
