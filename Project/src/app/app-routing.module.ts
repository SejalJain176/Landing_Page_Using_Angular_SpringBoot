import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth-guard.service';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [

  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'profile',component:ProfileComponent, canActivate: [AuthGuard] },
  { path: 'explore', component: ExploreComponent },
  { path: '**',component:SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
