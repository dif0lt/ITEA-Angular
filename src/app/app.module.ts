import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './modules/routing.module';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { BoldDirective } from './directives/bold.directive';
import { WhileDirective } from './directives/while.directive';

import { FactorialPipe } from './pipes/factorial.pipe';
import { JoinPipe } from './pipes/join.pipe';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ContactUsComponent,
    HomeComponent,
    NotFoundComponent,
    BoldDirective,
    WhileDirective,
    FactorialPipe,
    JoinPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }