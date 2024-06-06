import { Routes } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { AddProductComponent } from './features/product/add-product/add-product.component';

export const routes: Routes = [
    {path: "navbar", component: NavbarComponent},
    {path: "admin/categories", component: CategoryListComponent},
    {path: "admin/category/add", component: AddCategoryComponent},
    {path: "admin/category/categorylist", component: CategoryListComponent},
    {path: "admin/product/productlist", component: ProductListComponent},
    {path: "admin/product/add", component: AddProductComponent},
];