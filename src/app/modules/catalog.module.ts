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
import { CatalogResolverService } from '../services/catalog-resolver.service'

@NgModule({
  declarations: [
    CatalogComponent,
    CategoryComponent,
  ],
  imports: [
    CatalogRoutingModule,
    CommonModule,
    FormsModule,
    MdButtonModule,
    ReactiveFormsModule,
  ],
  providers: [
  CanDeactivateGuardService,
  CatalogResolverService,
  CategoriesService,
  ],
  bootstrap: []
})
export class CatalogModule { };
