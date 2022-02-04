import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase-config";
import {getFirestore} from 'firebase/firestore'
const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export default initializeAuthentication;