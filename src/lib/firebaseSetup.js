import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsJwIi1kyoTjPOgxtvMka4wtfytTdJ0QA",
  authDomain: "levnantini.firebaseapp.com",
  projectId: "levnantini",
  storageBucket: "levnantini.appspot.com",
  messagingSenderId: "822517369151",
  appId: "1:822517369151:web:13bb274f467473fbe96b8a",
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
export const auth = getAuth(App);
export default App;
