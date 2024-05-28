import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryServicesService {

  constructor(private http: HttpClient) { }

  getCategory(): Observable <AddCategoryRequest[]>{
    return this.http.get<AddCategoryRequest[]>(
      "https://localhost:7119/api/Categories"
    );
  }
}
