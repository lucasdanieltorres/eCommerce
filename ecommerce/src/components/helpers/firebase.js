import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//sdk firebase
import {getFirestore, collection, getDocs} from "firebase/firestore";



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
    // getDocs(productsCollectionRef).then( snapshot => {
    //                                         // console.log(snapshot.docs[0].data())
    //                                         const docsData = snapshot.docs.map( doc => doc.data());
    //                                         console.log(docsData);                                        
    //                                     });

    const snapshot = await getDocs(productsCollectionRef);
    const docsData = snapshot.docs.map( doc => doc.data());
    console.log(docsData);
    return (docsData); // es como si fuera un resolve, se puede leer con .then 
    
}



// const analytics = getAnalytics(app);