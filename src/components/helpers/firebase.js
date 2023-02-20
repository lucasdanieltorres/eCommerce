import { initializeApp } from "firebase/app";
//sdk firebase
import {getFirestore, collection, getDocs, getDoc, doc} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCVTMxyqy6JxVBepESeZNjlBD_5JIWe7w8",
  authDomain: "cleansolutions-4ed9f.firebaseapp.com",
  projectId: "cleansolutions-4ed9f",
  storageBucket: "cleansolutions-4ed9f.appspot.com",
  messagingSenderId: "1016184468944",
  appId: "1:1016184468944:web:625e39a90a8b4738ba75d5",
  measurementId: "G-S3D8ZBPM6S"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// funcion que retorna toda la coleccion de productos♥
export async function mPromise () {
    //ref a la coleccion
    const productsCollectionRef = collection(db, "productos")
    //pedir a FB los documentos de la coleccion


    const snapshot = await getDocs(productsCollectionRef);
    const docsData = snapshot.docs.map( doc => {
        return {...doc.data(), id: doc.id};
    });
    console.log(docsData);
    return (docsData); 

}

export async function getSingleItem(prodId)  {
    //ref a la coleccion
    const productsCollectionRef = collection(db, "productos")

    //2 ref al document 
    const docRef = doc(productsCollectionRef, prodId);
    //3 recibimos el snapshot con getdoc
    const snapshot = await getDoc(docRef);
    const singleItem = snapshot._document ?  ({...snapshot.data(), id: snapshot.id}) : snapshot._document;
    return singleItem; 
} 



// const analytics = getAnalytics(app);