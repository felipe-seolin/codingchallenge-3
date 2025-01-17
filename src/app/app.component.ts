import { Component } from '@angular/core';

import { ThfMenuItem } from '@totvs/thf-ui';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {}

  readonly menus: Array<ThfMenuItem> = [
    { label: 'Meu Perfil', link: '/home' },
    { label: 'Amigos', link: '/friends' },
  ];

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

}
