import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guards';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard]  },
  { path: 'friends', loadChildren: './friends/friends.module#FriendsModule', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
