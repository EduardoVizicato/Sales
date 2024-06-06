import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable <Product[]>{
    return this.http.get<Product[]>(
      "https://localhost:7119/api/Product"
    );
  }
}
