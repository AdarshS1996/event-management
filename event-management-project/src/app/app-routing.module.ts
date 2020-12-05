import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminParticipantsComponent } from './admin-participants/admin-participants.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminComponent } from './admin/admin.component';
import { EventsComponent } from './event/event.component';


const routes: Routes = [
  {
    path: '',
    component: EventsComponent
  },
  {
    path: 'home',
    component: EventsComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children : [
      { path: 'home', component: AdminHomeComponent },
      { path: 'events', component: AdminEventsComponent },
      { path: 'participants', component: AdminParticipantsComponent },
      { path: 'users', component: AdminUsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling : 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
