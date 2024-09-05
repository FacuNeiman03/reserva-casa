import { FirestoreService } from './firestore-service.js';

document.addEventListener('DOMContentLoaded', async () => {
    const firestoreService = new FirestoreService();
    
    try {
        const reservas = await firestoreService.getReservas();
        displayReservas(reservas);
    } catch (error) {
        console.error("Error al obtener reservas:", error);
    }
});

// Función para mostrar las reservas en el HTML
function displayReservas(reservas) {
    const reservasContainer = document.getElementById('reservas');
    
    reservas.forEach(reserva => {
        const reservaElement = document.createElement('div');
        reservaElement.classList.add('reserva');
        reservaElement.innerHTML = `
            <p><strong>Nombre:</strong> ${reserva.nombre}</p>
            <p><strong>Desde:</strong> ${new Date(reserva.desde.seconds * 1000).toLocaleString()}</p>
            <p><strong>Hasta:</strong> ${new Date(reserva.hasta.seconds * 1000).toLocaleString()}</p>
            <p><strong>Zona:</strong> ${reserva.zona || 'Sin zona'}</p>
        `;
        reservasContainer.appendChild(reservaElement);
    });
}
