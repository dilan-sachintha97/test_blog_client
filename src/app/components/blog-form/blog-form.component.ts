import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css'],
})
export class BlogFormComponent {
  title = '';
  content = '';

  constructor(private blogService: BlogService, private toastr: ToastrService) {}

  async submitForm() {
    try {
      await this.blogService.createBlog(this.title, this.content);
      this.toastr.success('Blog created successfully');
      this.title = '';
      this.content = '';
    } catch (error) {
      this.toastr.error('Failed to create blog');
    }
  }
}
