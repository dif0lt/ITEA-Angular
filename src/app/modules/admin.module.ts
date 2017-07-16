import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from '../admin/admin.component';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';
import { AuthGuardService } from '../services/auth-guard.service';

import { CategoryManagementComponent } from '../category-management/category-management.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { UsersManagementComponent } from '../users-management/users-management.component'

@NgModule({
  declarations: [
    AdminComponent,
    CategoryManagementComponent,
    AdminDashboardComponent,
    UsersManagementComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
  ],
  providers: [
    AdminService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: []
})
export class AdminModule { };