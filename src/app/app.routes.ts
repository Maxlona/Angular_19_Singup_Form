import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'index', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];
