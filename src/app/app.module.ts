import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ValuationComponent } from './modules/cars/valuation/valuation.component';
import { AboutComponent } from './modules/cars/about/about.component';
import { OfferComponent } from './modules/cars/offer/offer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ValuationComponent,
    AboutComponent,
    OfferComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    HttpClientModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    HttpClient
  ]
})
export class AppModuleTsModule { }
