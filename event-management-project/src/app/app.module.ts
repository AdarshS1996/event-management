import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './event/event.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminParticipantsComponent } from './admin-participants/admin-participants.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { TimerComponent } from './timer/timer.component';
import { NavbarComponent } from './commons/nav-bar/nav-bar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { TeamsComponent } from './team/team.component';
import { BreadcrumbsComponent } from './commons/breadcrumbs/breadcrumbs.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbsComponent,
    EventsComponent,
    TeamsComponent,
    RegistrationFormComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminEventsComponent,
    AdminParticipantsComponent,
    AdminUsersComponent,
    TimerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
