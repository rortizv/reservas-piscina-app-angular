import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private API_URL: string;
  private headers: HttpHeaders;
  private jwt: string;

  constructor(
    private http: HttpClient
  ) {
    this.API_URL = environment.API_URL_CORE;
    this.jwt = localStorage.getItem('JWT') || '{}';
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.jwt}`)
      .set('Accept', 'application/json');
  }

  listarUsuarios(): Observable<Array<Usuario>> {
    const endpoint = `api/usuarios`;
    const url = `${this.API_URL}${endpoint}`;
    return this.http.get<Array<Usuario>>(url, { headers: this.headers });
  }

  eliminarUsuario(id_usuario: number) {
    
  }

  crearUsuario(usuarioModel: Usuario): Observable<Usuario> {
    const endpoint = `api/usuarios/register`;
    const url = `${this.API_URL}${endpoint}`;
    return this.http.post<Usuario>(url, usuarioModel, { headers: this.headers });
  }
}