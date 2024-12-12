import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  async register(username: string, password: string, role: string = 'user') {
    return axios.post(`${this.apiUrl}/register`, { username, password, role });
  }

  async login(username: string, password: string) {
    const response = await axios.post(`${this.apiUrl}/login`, { username, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
