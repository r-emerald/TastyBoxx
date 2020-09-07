import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingCartComponent} from 'src/app/components/shopping-cart/shopping-cart.component';
import {LoginComponent} from 'src/app/components/login/login.component';
import {RegisterComponent} from 'src/app/components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import {HomeComponent} from 'src/app/components/home/home.component';


const routes: Routes = [
  {path: '', redirectTo:'/shop', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shop', component: ShoppingCartComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
