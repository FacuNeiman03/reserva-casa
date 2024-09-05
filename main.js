import { Calendar } from 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js';
import { FirestoreService } from './firestore-service.js';

document.addEventListener('DOMContentLoaded', async () => {
    const firestoreService = new FirestoreService();

    try {
        const reservas = await firestoreService.getReservas();
        const events = reservas.map(reserva => ({
            title: reserva.nombre,
            start: new Date(reserva.desde.seconds * 1000),
            end: new Date(reserva.hasta.seconds * 1000),
            backgroundColor: reserva.zona ? '#378006' : '#ff0000',
            borderColor: '#ffffff'
        }));

        initializeCalendar(events);
    } catch (error) {
        console.error("Error al obtener reservas:", error);
    }
});

function initializeCalendar(events) {
    const calendarEl = document.getElementById('calendar');

    const calendar = new Calendar(calendarEl, {
        initialView: 'timeGridWeek',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay'
        },
        events: events,
        locale: 'es',
        allDaySlot: false,
        slotDuration: '00:30:00',
        slotLabelInterval: '01:00',
        height: 'auto'
    });

    calendar.render();
}
