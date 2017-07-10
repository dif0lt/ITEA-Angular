import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { 
    MdButtonModule,
    MdCardModule,
    MdInputModule,
} from "@angular/material";

import { AdminModule } from './modules/admin.module'
import { CatalogModule } from './modules/catalog.module'
import { RoutingModule } from './modules/routing.module';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component'
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';

import { BoldDirective } from './directives/bold.directive';
import { WhileDirective } from './directives/while.directive';

import { FactorialPipe } from './pipes/factorial.pipe';
import { JoinPipe } from './pipes/join.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { UserService } from './services/user.service';

import "hammerjs";

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    ContactUsComponent,
    HomeComponent,
    NotFoundComponent,
    RegistrationComponent,
    BoldDirective,
    WhileDirective,
    FactorialPipe,
    JoinPipe,
    SortPipe,
    FilterPipe,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    CatalogModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { };
