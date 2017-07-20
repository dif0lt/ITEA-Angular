import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalPipeModule } from './global-pipe.module'

import { AdminComponent } from '../admin/admin.component';
import { UsersDetailsComponent } from '../user-details/user-details.component'

import { AdminRoutingModule } from './admin-routing.module';

// import { SortPipe } from '../pipes/sort.pipe';

import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { CanDeactivateGuardService } from '../services/can-deactivate-guard.service'

import { CategoryManagementComponent } from '../category-management/category-management.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { UsersManagementComponent } from '../users-management/users-management.component'

@NgModule({
  declarations: [
    AdminComponent,
    CategoryManagementComponent,
    AdminDashboardComponent,
    UsersManagementComponent,
    UsersDetailsComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MdInputModule,
    MdButtonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    GlobalPipeModule
  ],
  providers: [
    AdminService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: []
})
export class AdminModule {};
