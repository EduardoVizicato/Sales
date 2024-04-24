import { Routes } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';

export const routes: Routes = [
    {path: "navbar", component: NavbarComponent},
    {path: "admin/categories", component: CategoryListComponent},
    {path: "admin/category/add", component: AddCategoryComponent}
];