import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ThfModule } from '@totvs/thf-ui';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guards';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ThfModule,
    AppRoutingModule,
    SharedModule,
    LoginModule
  ],
  bootstrap: [ AppComponent ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AppModule { }
