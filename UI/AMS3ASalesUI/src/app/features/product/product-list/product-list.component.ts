import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../Models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, AddProductComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products? : Product[];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
      this.productService.getProduct()
      .subscribe({
        next: (response) => {
          this.products = response;
        }
      });
  }
}
