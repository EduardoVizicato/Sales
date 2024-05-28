import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request.models';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServicesService {

  constructor(private http: HttpClient) { }

  getCategory(): Observable <Category[]>{
    return this.http.get<Category[]>(
      "https://localhost:7119/api/Categories"
    );
  }
}
