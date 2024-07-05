import { NgModule } from '@angular/core';
import { HomepageComponent } from "./homepage.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
})
export class HomepageModule {}
