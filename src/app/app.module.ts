import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ]
})
export class AppModuleTsModule { }
