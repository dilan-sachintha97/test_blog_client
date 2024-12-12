import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogFormComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule, // Ensure RouterModule is listed here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
