import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServicesService {

  constructor(private http: HttpClient) { }

  getCategory(){
    this.http.get("https://localhost:7119/api/Categories")
  }
}
