import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './modules/routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component'
import { CatalogComponent } from './catalog/catalog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { BoldDirective } from './directives/bold.directive';
import { WhileDirective } from './directives/while.directive';

import { FactorialPipe } from './pipes/factorial.pipe';
import { JoinPipe } from './pipes/join.pipe';

import { UserService } from './services/user.service';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    CatalogComponent,
    ContactUsComponent,
    HomeComponent,
    NotFoundComponent,
    BoldDirective,
    WhileDirective,
    FactorialPipe,
    JoinPipe,
    RegistrationComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { };
