import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationsComponent } from './donations/donations.component';
import { HomeComponent } from './home/homepage.component';
import { LoginComponent } from './login/login.component'; 
import { MakeDonationComponent } from './make-donation/make-donation.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component'; 
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { UpdateuserComponent } from './users/updateuser/updateuser.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsersComponent } from './users/users.component'; 
const routes: Routes = [

  { path:'home',component: HomeComponent },
  {path:'login', component: LoginComponent},
  //{path:'profiles', component: ProfileManagementComponent},
  
  {path:'users', component: UsersComponent},
  {
    path:'users/:id',component:UserDetailComponent
  },
  {path:'users/adduser', component: AdduserComponent},
                {path:'updateuser/id', component:UpdateuserComponent},

  {path:'donations',component: DonationsComponent},
  {
  path: 'donations/makeDonation', component:MakeDonationComponent
  },
  {path:'profiles', component: ProfileManagementComponent},

  //{ path:'profile/update', component:UpdateProfileComponent},
  {path:'profiles/update/:id', component:UpdateProfileComponent },
  //{path:"**", component: PagenotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 

exports: [RouterModule]
})
export class AppRoutingModule { }
