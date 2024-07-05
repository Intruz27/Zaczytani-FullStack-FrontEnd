import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {
    path: 'home',
    title: 'Strona główna',
    component: HomepageComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
