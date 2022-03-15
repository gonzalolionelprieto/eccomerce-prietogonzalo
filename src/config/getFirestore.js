import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAoSSH9iJBSfHgMI5oqL0g70F10rnxIEHE",
  authDomain: "proyecto-eccomerce.firebaseapp.com",
  projectId: "proyecto-eccomerce",
  storageBucket: "proyecto-eccomerce.appspot.com",
  messagingSenderId: "737291583227",
  appId: "1:737291583227:web:44f1b9e348928a06813a5e"
};


const app = initializeApp(firebaseConfig);

export  const getFirestore = () => {
    return app
}
