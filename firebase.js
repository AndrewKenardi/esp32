import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1rEsRrEAooYPvx9DXB5Z_1kP6f2kM3q4",
  authDomain: "esp32-4394c.firebaseapp.com",
  databaseURL: "https://esp32-4394c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp32-4394c",
  storageBucket: "esp32-4394c.firebasestorage.app",
  messagingSenderId: "434807405847",
  appId: "1:434807405847:web:8f63bf6703a3c4bc9c8b52"
};

const app = initializeApp(firebaseConfig);

// Export objek yang dibutuhkan
export const db = getFirestore(app);
export const auth = getAuth(app);
