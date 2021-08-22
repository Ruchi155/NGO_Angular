import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HomeComponent } from './home/homepage.component';
import { LoginComponent } from './login/login.component';
import { PagenotFoundComponent } from './pagenot-found-component/pagenot-found-component.component';
import { DonationsComponent } from './donations/donations.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { DeleteuserComponent } from './users/deleteuser/deleteuser.component';
import { DeletedonationComponent } from './donations/deletedonation/deletedonation.component';
import { UpdatedonationComponent } from './donations/updatedonation/updatedonation.component';
import { AdddonationComponent } from './donations/adddonation/adddonation.component';
import { FormsModule } from '@angular/forms';
import { UserlistComponent } from './users/userlist/userlist.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProfileManagementComponent,
    UpdateProfileComponent,
    HomeComponent,
    LoginComponent,
    PagenotFoundComponent,
    DonationsComponent,
    AdduserComponent,
    DeleteuserComponent,
    DeletedonationComponent,
    UpdatedonationComponent,
    AdddonationComponent,
    UserlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
