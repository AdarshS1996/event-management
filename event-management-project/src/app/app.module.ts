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
import { AboutUsComponent } from './about-us/about-us.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterEventsComponent } from './register-events/register-events.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbsComponent,
    EventsComponent,
    TeamsComponent,
    RegisterEventsComponent,
    RegistrationFormComponent,
    AboutUsComponent,
    EventDetailsComponent,
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
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
