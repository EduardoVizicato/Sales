import { Component, NgModule } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.models';
import { CategoryServicesService } from '../services/category-services.service';
import { Router, response } from 'express';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  model: AddCategoryRequest;
  constructor(private categoryService: CategoryServicesService){

    this.model = {
      description: '',
      imageUrl: '',
    };
  }
  
  onFormSubmit(){
    console.log(this.model);
    this.categoryService.addCategory(this.model);
    // .subscribe({
    //   next:(response)=> {
    //     //this.router.navigate
    //     console.log(response);
    //   }
    // });
  }
}
