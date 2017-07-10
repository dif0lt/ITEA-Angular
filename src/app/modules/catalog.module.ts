import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { 
    MdButtonModule,
} from "@angular/material";

import { CatalogComponent } from '../catalog/catalog.component';
import { CategoryComponent } from '../category/category.component';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CategoriesService } from '../services/categories.service';

@NgModule({
  declarations: [
    CatalogComponent,
    CategoryComponent,
  ],
  imports: [
    CatalogRoutingModule,
    CommonModule,
    MdButtonModule,
  ],
  providers: [CategoriesService],
  bootstrap: []
})
export class CatalogModule { };
