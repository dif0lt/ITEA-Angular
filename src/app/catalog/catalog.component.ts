import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from '../models/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.styl']
})
export class CatalogComponent implements OnInit {

  categories: Category[];

  constructor(
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  onSelect(category: Category) {
    this.router.navigate([category.id], { relativeTo: this.activatedRoute });
  }

  ngOnInit() {
    console.log('catalogInit');
    this.categoriesService.getCategories()
                    .subscribe(
                      categories => this.categories = categories,
                      error => console.error(error)
                    )               
  }
}
