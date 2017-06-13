import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { UserService } from './services/user.service';

import { BoldDirective } from './directives/bold.directive';
import { WhileDirective } from './directives/while.directive';

import { FactorialPipe } from './pipes/factorial.pipe';
import { JoinPipe } from './pipes/join.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoldDirective,
    WhileDirective,
    FactorialPipe,
    JoinPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }