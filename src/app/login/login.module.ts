import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';
import { ThfModalPasswordRecoveryModule } from '@totvs/thf-templates/components/thf-modal-password-recovery';

import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThfPageLoginModule,
    ThfModalPasswordRecoveryModule
  ]
})
export class LoginModule { }
