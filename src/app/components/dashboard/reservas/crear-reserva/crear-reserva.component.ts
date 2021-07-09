import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/interfaces/reserva';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  turnos: any[] = [
    '1. De 9:00 am - 11:00 am',
    '2. De 11:00 am - 1:00 pm',
    '3. De 2:00 pm - 4:00 pm',
    '4. De 4:00 pm - 6:00 pm'
  ];
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private _reservaService: ReservasService,
              private router: Router,
              private _snackbar: MatSnackBar) { 
    this.form = this.fb.group({
      fecha_reserva: ['', Validators.required],
      turno: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  agregarReserva() {
    const reserva: Reserva = {
      id_reserva: this.form.value.id_reserva,
      fecha_reserva: this.form.value.fecha_reserva,
      turno: this.form.value.turno,
      id_usuario: this.form.value.id_usuario
    }

    this._reservaService.agregarReserva(reserva);
    this.router.navigate(['/dashboard/reservas']);

    this._snackbar.open('Reserva creada satisfactoriamente', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}