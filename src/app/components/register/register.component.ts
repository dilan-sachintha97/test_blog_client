import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  role = 'user';

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  async register() {
    try {
      await this.authService.register(this.username, this.password, this.role);
      this.toastr.success('Registration successful');
      this.router.navigate(['/login']);
    } catch (error) {
      this.toastr.error('Registration failed');
    }
  }
}
