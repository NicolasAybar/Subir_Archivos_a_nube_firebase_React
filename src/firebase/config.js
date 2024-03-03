import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyCTTE2p1pSkZLMu_VY9WvYvQEAjd1W8QJI",
  authDomain: "react-nube-galeria.firebaseapp.com",
  projectId: "react-nube-galeria",
  storageBucket: "react-nube-galeria.appspot.com",
  messagingSenderId: "564812513872",
  appId: "1:564812513872:web:6813ddc3740dccbc06c755"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile (file){
    const storageRef = ref(storage,v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}