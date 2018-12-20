import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { S02Assignment1Component } from './section02/app/assignment1/assignment1.component';
import { S02Assignment2Component } from './section02/app/assignment2/assignment2.component';
import { S02Assignment3Component } from './section02/app/assignment3/assignment3.component';
import { S05AppComponent } from './section05/app/app.component';
import { S05GameControlComponent } from './section05/app/game-control/game-control.component';
import { S05OddComponent } from './section05/app/odd/odd.component';
import { S05EvenComponent } from './section05/app/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    S02Assignment1Component,
    S02Assignment2Component,
    S02Assignment3Component,
    S05AppComponent,
    S05GameControlComponent,
    S05OddComponent,
    S05EvenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
