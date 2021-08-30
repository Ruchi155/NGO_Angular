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
import { AdminrouteguardService } from './services/adminrouteguard.service';
import { UpdateProfileComponent } from './update-profile/update-profile.component'; 
import { UpdateuserComponent } from './users/updateuser/updateuser.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsersComponent } from './users/users.component'; 
 
import { DonationTypeComponent } from './donation-type/donation-type.component';
const routes: Routes = [ 
  
  {path:'', redirectTo: "home",pathMatch:"full"},  
  { path:'home',component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent,canActivate:[AdminrouteguardService,AuthGuard]}, 
  {
    path:'donationTypes', component:DonationTypeComponent
  },
  {  path:'cart',component:CartComponent,                           canActivate:[AuthGuard] 
}, 
  {path:'users', component: UsersComponent,                         canActivate:[AuthGuard, AdminrouteguardService]
}, 
  {path:'users/:id',component:UserDetailComponent, },
  {path:'users/updateuser/:id', component:UpdateuserComponent ,     canActivate:[AdminrouteguardService]}, 
  {path:'donations',component: DonationsComponent,                  canActivate:[AdminrouteguardService,AuthGuard]},
  {path: 'donations/makeDonation/:id', component:MakeDonationComponent,canActivate:[AuthGuard] 
},
  {path:'profiles', component: ProfileManagementComponent,             canActivate:[AuthGuard, AdminrouteguardService]
},  
  {path:'profiles/update/:id', component:UpdateProfileComponent,       canActivate:[AuthGuard]
 }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 


exports: [RouterModule]
})
export class AppRoutingModule { }
