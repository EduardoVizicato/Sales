import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
    this.CategoryService.getCategory()
    .subscribe({
      next: (response) => {
        this.categories = response;
      }
    });
  }
}
