import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = `${environment.apiUrl}/blogs`;

  async getAllBlogs() {
    return axios.get(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  async createBlog(title: string, content: string) {
    return axios.post(this.apiUrl, { title, content }, { headers: this.getAuthHeaders() });
  }

  async updateBlog(id: string, data: any) {
    return axios.put(`${this.apiUrl}/${id}`, data, { headers: this.getAuthHeaders() });
  }

  async deleteBlog(id: string) {
    return axios.delete(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  private getAuthHeaders() {
    return { Authorization: `Bearer ${localStorage.getItem('token')}` };
  }
}
