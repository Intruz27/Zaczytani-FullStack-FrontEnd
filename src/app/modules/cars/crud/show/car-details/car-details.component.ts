import { Component, Input, OnInit } from '@angular/core';
import { CarsInterface } from "../../../../interfaces";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent {
  @Input() carData: CarsInterface = {} as CarsInterface;

}
