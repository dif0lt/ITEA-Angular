import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from '../models/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.styl']
})
export class CategoryComponent implements OnInit {

  category: Category;

  constructor(
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('CategoryComponentInit')
    let id: number = this.activatedRoute.snapshot.params['id'];
    this.categoriesService.getCategoryById(id)
                          .subscribe(
                            category => this.category = category,
                            error => console.error(error)
                          )
  }
}
