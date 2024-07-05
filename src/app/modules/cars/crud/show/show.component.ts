import { CarsInterface, PartsInterface } from './../../../interfaces';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PartDetailsComponent } from './part-details/part-details.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { VertiCarService } from '../../../../services/vertiCar.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, PartDetailsComponent, CarDetailsComponent],
  providers: [HttpClient, VertiCarService, HttpClientModule, AuthService],
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  public mockObject: CarsInterface | PartsInterface = {} as CarsInterface;
  public carData: CarsInterface = {} as CarsInterface;
  public partData: PartsInterface = {} as PartsInterface;
  public isCar: boolean = true;
  public isUserLogged: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private vertiCarService: VertiCarService, 
    private authService: AuthService,
    private router: Router,) {
  }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged;
    if(this.router.url.indexOf('showCar') != -1) {
      this.isCar = true;
    } else {
      this.isCar = false;
    }

     this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          if(this.isCar) {
            this.vertiCarService.getCar(id).subscribe({
              next: (response) => {
                this.carData = response;
              }
            })
          } else{
            this.vertiCarService.getPart(id).subscribe({
              next: (response) => {
                this.partData = response;
              }
            })
          }

        }
      }
     })



  }

  public redirectToEdit(id: string) {
    if(this.isCar) {
      this.router.navigate([`/editCar/${id}`]);
    } else {
      this.router.navigate([`/editPart/${id}`]);
    }
  }

  public delete(id: string) {
    console.log('id',id);
    console.log('partData',this.partData);
    if(this.isCar) {
      this.vertiCarService.deleteCar(id).subscribe({
        next: () => {
          this.router.navigate(['/list/cars']);
        }
      })
    } else {
      this.vertiCarService.deletePart(id).subscribe({
        next: () => {
          this.router.navigate(['/list/parts']);
        }
      })
    }

  }

}
