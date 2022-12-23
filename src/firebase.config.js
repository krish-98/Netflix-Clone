import { initializeApp, getApp, getApps } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDvPwXWA5LYTiTf1jYcWCUVGw5rX6hJcAU",
  authDomain: "netflix-clone-438e7.firebaseapp.com",
  projectId: "netflix-clone-438e7",
  storageBucket: "netflix-clone-438e7.appspot.com",
  messagingSenderId: "123517064187",
  appId: "1:123517064187:web:72c099ad782721a146715e",
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
