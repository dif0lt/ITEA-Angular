import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { CatalogComponent } from '../catalog/catalog.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RegistrationComponent } from '../registration/registration.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  // { path: 'Catalog', component: CatalogComponent },
  { path: 'contact-Us', component: ContactUsComponent },
  { path: 'registration', component: RegistrationComponent },
  //
  { path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class RoutingModule {}
