import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCHpbiSdpuPQSU2_EPLQjCoWk9jpCkG6bk",
    authDomain: "fir-auth-mem.firebaseapp.com",
    projectId: "fir-auth-mem",
    storageBucket: "fir-auth-mem.appspot.com",
    messagingSenderId: "986394269840",
    appId: "1:986394269840:web:d06c4dbc3c749a4f45e015",
    measurementId: "G-PX9DYL54BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;