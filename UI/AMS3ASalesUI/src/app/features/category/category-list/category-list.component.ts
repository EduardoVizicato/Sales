import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryServicesService } from '../services/category-services.service';
import { AddCategoryRequest } from '../models/add-category-request.models';
import { response } from 'express';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { Category } from '../models/Category';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink, AddCategoryComponent, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  categories? : Category[];

  constructor(private categoryService: CategoryServicesService){}

  ngOnInit(): void {
      this.categoryService.getCategory()
      .subscribe({
        next: (response) => {
          this.categories = response;
        }
      });
  }
}
