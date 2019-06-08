import { Component, OnInit } from '@angular/core';

import { ThfPageLoginLiterals } from '@totvs/thf-templates/components/thf-page-login';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  literals: ThfPageLoginLiterals = {
    loginHint: "Serviço de autenticação de usuário não desenvolvido. Entre com o usuário admin@deployment.com.br e senha 123456"
  };

  passwordErrors: Array<string> = [];

  login: string;
  password: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin(event){
    this.login = event.login;
    this.password = event.password;

    if ( this.authService.fazerLogin(this.login, this.password ) ){
      this.passwordErrors = [];
    } else{
      this.passwordErrors.push('Digite corretamente seu usuário e senha');
    }
  }

  limparErro(){
    this.passwordErrors = [];
  }
}
