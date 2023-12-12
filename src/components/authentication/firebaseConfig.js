// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_API_KEY,
//   authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_APP_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_APP_ID,
//   measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyDal85Hutou-pgjupc4crcXM_TW5mOZHbY",
  authDomain: "litflix-f6f1f.firebaseapp.com",
  projectId: "litflix-f6f1f",
  storageBucket: "litflix-f6f1f.appspot.com",
  messagingSenderId: "814822396233",
  appId: "1:814822396233:web:404e1e09ebcca62988ca98",
  measurementId: "G-Y4C53VGH7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;