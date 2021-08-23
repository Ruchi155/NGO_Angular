import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { HomeComponent } from './home/homepage.component';
import { LoginComponent } from './login/login.component';
import { PagenotFoundComponent } from './pagenot-found-component/pagenot-found-component.component';
import { DonationsComponent } from './donations/donations.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { DeletedonationComponent } from './donations/deletedonation/deletedonation.component';
import { UpdatedonationComponent } from './donations/updatedonation/updatedonation.component';
import { AdddonationComponent } from './donations/adddonation/adddonation.component';
import { FormsModule } from '@angular/forms';
import { UserlistComponent } from './users/userlist/userlist.component';
import { DonationslistComponent } from './donationslist/donationslist.component';
import { UpdateuserComponent } from './users/updateuser/updateuser.component';

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
    UpdateuserComponent,
    DeletedonationComponent,
    UpdatedonationComponent,
    AdddonationComponent,
    UserlistComponent,
    DonationslistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,FormsModule, BrowserAnimationsModule,    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
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
