import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ContaService{

  constructor(private httpClient: HttpClient) {}

  registrarUsuario(usuario: UsuarioModel){

  }
}
