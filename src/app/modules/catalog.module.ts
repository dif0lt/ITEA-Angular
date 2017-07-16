import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
    MdButtonModule,
} from "@angular/material";

import { CatalogComponent } from '../catalog/catalog.component';
import { CategoryComponent } from '../category/category.component';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CategoriesService } from '../services/categories.service';
import { CanDeactivateGuardService } from '../services/can-deactivate-guard.service';

@NgModule({
  declarations: [
    CatalogComponent,
    CategoryComponent,
  ],
  imports: [
    CatalogRoutingModule,
    CommonModule,
    MdButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  CategoriesService,
  CanDeactivateGuardService
  ],
  bootstrap: []
})
export class CatalogModule { };
