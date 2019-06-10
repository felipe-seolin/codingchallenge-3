import { NgModule } from '@angular/core';

import { FriendsComponent } from './friends.component';
import { FriendsRoutingModule } from './friends-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FriendsComponent
  ],
  imports: [
    SharedModule,
    FriendsRoutingModule
  ]
})
export class FriendsModule { }
