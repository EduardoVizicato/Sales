import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryListComponent } from '../../features/category/category-list/category-list.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CategoryListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
