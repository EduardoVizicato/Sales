import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddCategoryRequest } from '../models/add-category-request.models';
import { core } from '@angular/compiler';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  model: AddCategoryRequest;
  constructor(){
    this.model = {
      description: 'ams',
    };
  }
  
  onFormSubmit(){
    console.log(this.model)
  }
}
