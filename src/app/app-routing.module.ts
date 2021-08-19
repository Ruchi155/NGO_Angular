import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path:'homepage',component: HomepageComponent
  },
  {
    path:'profiles', component: ProfileManagementComponent
  },
  {
    path:'profiles/update/:id', component:UpdateProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
