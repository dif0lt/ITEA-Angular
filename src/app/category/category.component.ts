import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { Category } from '../models/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.styl']
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;
  category: Category;
  editCategory: Category;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute
  ) { }

  onSubmit(e: Event, form: FormGroup) {
    e.preventDefault();
    this.category = form.value;
    console.log(this.category);
    // if (form.valid) {
    // this.categoriesService.updateCategory(this.category)
    //         .then(
    //             () => this.showSuccessMessage = true
    //         )
    //         .c  atch(
    //             e => console.error(e)
    //         )
    // }
  }

  ngOnInit() {
    console.log('CategoryComponentInit')
    let id: number = this.activatedRoute.snapshot.params['id'];
    this.categoriesService.getCategoryById(id)
                          .subscribe(
                            category => this.category = category,
                            error => console.error(error)
                          )
    this.categoryForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      description: [null, Validators.required],
    });
    this.editCategory = this.categoryForm.value;
  }

  canDeactivate() {
    if(!this.category || this.category.name === this.editCategory.name) {
      return true;
    }

    return confirm('Discard changes?');
  }
}
