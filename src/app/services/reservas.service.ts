import { Injectable } from '@angular/core';
import { Reserva } from '../interfaces/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  listReservas: Reserva[] = [
    { id_reserva: 1, fecha_reserva: new Date(2021,7,25), turno: '1. De 9:00 am - 11:00 am', id_usuario: 1 },
    { id_reserva: 2, fecha_reserva: new Date(2021,7,25), turno: '2. De 11:00 am - 1:00 pm', id_usuario: 3 },
    { id_reserva: 3, fecha_reserva: new Date(2021,7,25), turno: '3. De 2:00 pm - 4:00 pm', id_usuario: 2 },
    { id_reserva: 4, fecha_reserva: new Date(2021,7,25), turno: '4. De 4:00 pm - 6:00 pm', id_usuario: 4 },
  ]

  constructor() { }

  getReserva() {
    return this.listReservas.slice();
  }

  eliminarReserva(id_reserva: number) {
    this.listReservas.splice(id_reserva, 1);
  }

  agregarReserva(reserva: Reserva) {
    this.listReservas.unshift(reserva);
  }

}
