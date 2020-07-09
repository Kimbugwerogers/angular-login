import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './user/registration.component';
import { LoginComponent } from './user/login.component';
import { AuthguardGuard } from './user/authguard.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule), canActivate: [AuthguardGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
