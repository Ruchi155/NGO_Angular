import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationsComponent } from './donations/donations.component';
import { HomeComponent } from './home/homepage.component';
import { LoginComponent } from './login/login.component';
//import { PagenotFoundComponent } from './pagenot-found-component/pagenot-found-component.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { UpdateuserComponent } from './users/updateuser/updateuser.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  { path:'home',component: HomeComponent },
  //{path:'profiles', component: ProfileManagementComponent},
  { path:'profile/update', component:UpdateProfileComponent},
  {path:'users', component: UsersComponent },
  {path:'users/adduser', component: AdduserComponent},
  {path:'users/updateuser/id', component:UpdateuserComponent},
  {path:'login', component: LoginComponent},
  {path:'donations',component: DonationsComponent},
  {
  path:'profiles', component: ProfileManagementComponent
  },
  {path:'profiles/update/:id', component:UpdateProfileComponent },
  //{path:"**", component: PagenotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
