import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogs: any[] = [];

  constructor(private blogService: BlogService, private toastr: ToastrService) {}

  async ngOnInit() {
    await this.loadBlogs();
  }

  async loadBlogs() {
    try {
      const response = await this.blogService.getAllBlogs();
      this.blogs = response.data;
    } catch (error) {
      this.toastr.error('Failed to load blogs');
    }
  }
}
