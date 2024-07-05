import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { PartsInterface } from '../../interfaces';
import { VertiCarService } from '../../../services/vertiCar.service';

@Component({
  selector: 'app-parts',
  standalone: true,
  imports: [CommonModule],
  providers: [VertiCarService],
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {
  public parts: PartsInterface[] = [];

  constructor(private router: Router, private vertiCarService: VertiCarService) { }

  ngOnInit(): void {
    this.vertiCarService.getAllParts().subscribe({
      next: (parts) => {
        console.log(parts);
        this.parts = parts;
      },
      error: (response) => {
        console.log(response);
      }
  })
  }

  public redirectTo(id: string) {
    this.router.navigate([`showPart/${id}`]);
}

}
