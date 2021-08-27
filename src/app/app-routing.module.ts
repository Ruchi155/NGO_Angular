import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DonationsComponent } from './donations/donations.component';
import { HomeComponent } from './home/homepage.component';
 
import { LoginComponent } from './login/login.component'; 
import { MakeDonationComponent } from './make-donation/make-donation.component'; 
import { ProfileManagementComponent } from './profile-management/profile-management.component'; 
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './routeguard/auth.guard';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { UpdateuserComponent } from './users/updateuser/updateuser.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsersComponent } from './users/users.component'; 
 
const routes: Routes = [ 
  
  {path:'', redirectTo: "home",pathMatch:"full"},  
  { path:'home',component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  //{path:'profiles', component: ProfileManagementComponent},
  {
    path:'cart',component:CartComponent
  },
 
  {path:'users', component: UsersComponent,canActivate:[AuthGuard]},
  
  {path:'users/adduser', component: AdduserComponent},
  {
    path:'users/:id',component:UserDetailComponent,
  },
  {path:'users/updateuser/:id', component:UpdateuserComponent},

  {path:'donations',component: DonationsComponent},
  {
  path: 'donations/makeDonation/:id', component:MakeDonationComponent
  },
  {path:'profiles', component: ProfileManagementComponent}, 
  //{ path:'profile/update', component:UpdateProfileComponent},
  {path:'profiles/update/:id', component:UpdateProfileComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 

exports: [RouterModule]
})
export class AppRoutingModule { }
