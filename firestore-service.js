import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { FirebaseService } from './firebase-config.js';

export class FirestoreService {
    constructor() {
        this.firebaseService = new FirebaseService();
        this.db = this.firebaseService.getDb();
    }

    async getReservas() {
        const reservaCollection = collection(this.db, 'reserva');
        const snapshot = await getDocs(reservaCollection);
        const reservas = snapshot.docs.map(doc => doc.data());
        return reservas;
    }
}
