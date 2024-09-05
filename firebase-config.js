// Importar los módulos que necesites (en este caso para Firebase Firestore)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Configuración de Firebase (obtén estos valores desde tu consola de Firebase)
export class FirebaseService {
  constructor() {
    const firebaseConfig = {
        apiKey: "AIzaSyCeET1BcM56dtf3DWMD08zUwc1Um6pzD3Y",
        authDomain: "reserva-casa.firebaseapp.com",
        projectId: "reserva-casa",
        storageBucket: "reserva-casa.appspot.com",
        messagingSenderId: "307559617597",
        appId: "1:307559617597:web:9d623f7485753743850654"
      };
     this.app = initializeApp(firebaseConfig);
     this.db = getFirestore(this.app);
  }

  getDb() {
    return this.db;
  }
}