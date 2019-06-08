import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(login, password){
    if (login === 'admin@deployment.com.br' && password === '123456') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

      return true;

    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
  
      return false;
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}