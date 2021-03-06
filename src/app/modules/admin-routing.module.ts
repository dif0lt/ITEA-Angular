import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { CategoryManagementComponent } from '../category-management/category-management.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { UsersManagementComponent } from '../users-management/users-management.component';
import { UsersDetailsComponent } from '../user-details/user-details.component';

import { AuthGuardService } from '../services/auth-guard.service';
import { CanDeactivateGuardService } from '../services/can-deactivate-guard.service';

const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
          {
            path: 'categories',
            component: CategoryManagementComponent
          },
          {
            path: 'users',
            component: UsersManagementComponent,
            children: [
              {
                path: ':id',
                canDeactivate: [CanDeactivateGuardService],
                component: UsersDetailsComponent,
              }
            ]
          },
          {
            path: '',
            component: AdminDashboardComponent
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
