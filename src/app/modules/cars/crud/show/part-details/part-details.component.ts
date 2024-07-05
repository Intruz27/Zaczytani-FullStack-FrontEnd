import { Component, Input, OnInit } from '@angular/core';
import { PartsInterface } from "../../../../interfaces";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-part-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.scss']
})
export class PartDetailsComponent {
  @Input() partData: PartsInterface = {} as PartsInterface;

}
