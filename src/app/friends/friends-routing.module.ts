
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendsComponent } from './friends.component';

export const friendsRoutes: Routes = [
  { path: '', component: FriendsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(friendsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FriendsRoutingModule { }
