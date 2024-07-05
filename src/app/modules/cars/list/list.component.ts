import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { CarsInterface } from '../../interfaces';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VertiCarService } from '../../../services/vertiCar.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [HttpClient, VertiCarService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public cars: CarsInterface[] = [];
  constructor(private router: Router, private vertiCarService: VertiCarService) { }

  ngOnInit(): void {
    this.vertiCarService.getAllCars().subscribe({
      next: (cars) => {
        console.log(cars);
        this.cars = cars;
      },
      error: (response) => {
        console.log(response);
      }
  })
  }

  public redirectTo(id: string) {
    console.log(`showCar/${id}`)
    this.router.navigate([`showCar/${id}`]);
  }
}
