import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOTfXZIor_hnTOIFaadJ4OmHd4yIRnXOM",
  authDomain: "clean-co-client-f14db.firebaseapp.com",
  projectId: "clean-co-client-f14db",
  storageBucket: "clean-co-client-f14db.appspot.com",
  messagingSenderId: "500638450201",
  appId: "1:500638450201:web:c027b9ea2b6f3594ab6088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);