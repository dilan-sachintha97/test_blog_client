import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: BlogListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: BlogFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Ensure RouterModule is imported here
  exports: [RouterModule], // Ensure RouterModule is exported
})
export class AppRoutingModule {}
