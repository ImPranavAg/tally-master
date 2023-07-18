import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCso47amBpQc0ChP9U85tByDmqs1VPIi00",
  authDomain: "tally-counter-c71ea.firebaseapp.com",
  projectId: "tally-counter-c71ea",
  storageBucket: "tally-counter-c71ea.appspot.com",
  messagingSenderId: "571097944299",
  appId: "1:571097944299:web:0b8d74f08d69bfbb8f6eae",
  measurementId: "G-5W6NQ84V7Y",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
