import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/cars/admin/login/login.component';
import { AddComponent } from './modules/cars/crud/add/add.component';
import { OfferComponent } from './modules/cars/offer/offer.component';
import { AboutComponent } from './modules/cars/about/about.component';
import { ValuationComponent } from './modules/cars/valuation/valuation.component';
import { PartsComponent } from './modules/cars/parts/parts.component';
import { ShowComponent } from './modules/cars/crud/show/show.component';
import { ListComponent } from './modules/cars/list/list.component';
import { HomepageComponent } from './modules/homepage/homepage.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'list/cars',
        component: ListComponent,
      },
      {
        path: 'list/parts',
        component: PartsComponent,
      },
      {
        path: 'showCar/:id',
        component: ShowComponent,
      },
      {
        path: 'showPart/:id',
        component: ShowComponent,
      },
      {
        path: 'valuation',
        component: ValuationComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'offer',
        component: OfferComponent,
      },
      {
        path: 'addPart',
        component: AddComponent,
      },
      {
        path: 'addCar',
        component: AddComponent,
      },
      {
        path: 'editCar/:id',
        component: AddComponent,
      },
      {
        path: 'editPart/:id',
        component: AddComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
