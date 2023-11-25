import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Dato } from "../types/datos";
import firebaseConfig from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveDatosInLS = async (datos: Dato) => {
    try {
      await addDoc(collection(db, "datos"), datos);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

export const getDatosInLS = async (): Promise<any> => {
    const resp: Dato[] = []
    const querySnapshot = await getDocs(collection(db, "datos"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
        resp.push({
            ...doc.data
        } as Dato)
    });
    return resp
}

export default {saveDatosInLS, getDatosInLS}