import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  async login() {
    try {
      await this.authService.login(this.username, this.password);
      this.toastr.success('Login successful');
      this.router.navigate(['/']);
    } catch (error) {
      this.toastr.error('Login failed');
    }
  }
}
