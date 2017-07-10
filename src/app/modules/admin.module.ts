import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from '../admin/admin.component';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminService } from '../services/admin.service'

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
  ],
  providers: [AdminService],
  bootstrap: []
})
export class AdminModule { };