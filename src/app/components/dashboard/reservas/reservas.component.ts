import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Reserva } from 'src/app/interfaces/reserva';
import { ReservasService } from '../../../services/reservas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  listReservas: Reserva[] = [];

  displayedColumns: string[] = ['id_reserva', 'fecha_reserva', 'turno', 'id_usuario', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _reservaService: ReservasService, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas() {
    this.listReservas = this._reservaService.getReserva();
    this.dataSource = new MatTableDataSource(this.listReservas);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarReserva(id_reserva: number) {
    this._reservaService.eliminarReserva(id_reserva);
    this.cargarReservas();

    this._snackbar.open('Reserva eliminada satisfactoriamente', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}