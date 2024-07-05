import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { createCarForm, createPartForm } from "../../form.build";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { AddCarComponent } from './add-car/add-car.component';
import { AddPartComponent } from './add-part/add-part.component';
import { VertiCarService } from '../../../../services/vertiCar.service';


@Component({
  selector: 'app-add',
  standalone: true,
  providers: [VertiCarService],
  imports: [CommonModule, ReactiveFormsModule , AddCarComponent, AddPartComponent],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({});;

  public isEdit: boolean = false;

  public isCar: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private vertiCarService: VertiCarService) {
  }

  ngOnInit(): void {
    if(this.router.url.indexOf('editCar') != -1 || this.router.url.indexOf('editPart') != -1) {
      this.isEdit = true;
      if(this.router.url.indexOf('editCar') != -1 ) {
        this.isCar = true;
          this.route.paramMap.subscribe({
            next: (params) => {
              const id = params.get('id');
          
              if(id){
                this.vertiCarService.getCar(id).subscribe({
                  next: (response) => {
                   this.form = createCarForm();
                    this.form.patchValue(response);
                  }
                })
              }
            }
           })
        } else if(this.router.url.indexOf('editPart') != -1 ){
          this.isCar = false;
          this.form = createPartForm();
          this.route.paramMap.subscribe({
            next: (params) => {
              const id = params.get('id');
          
              if(id){
                this.vertiCarService.getPart(id).subscribe({
                  next: (response) => {
                    this.form.patchValue(response);
                  }
                })
              }
            }
           })
    }
    
    } else {
      this.isEdit = false;
      if(this.router.url.indexOf('addCar') != -1 ){
        this.isCar = true;
        this.form = createCarForm();
      } else {
        this.isCar = false;
        this.form = createPartForm();
      }
    }
  }

  public save(form: FormGroup): void {
    if(this.isCar)
      if(this.isEdit) {
        this.vertiCarService.updateCar(form.get('id')?.value, form.value).subscribe({
          next: () => {
            this.router.navigate(['list/cars']);
          }
      });
      } else {
        this.vertiCarService.addCar(form.value).subscribe({
             next: () => {
               this.router.navigate(['list/cars']);
             }
         });
      } else {

        if(this.isEdit) {
          this.vertiCarService.updatePart(form.get('id')?.value, form.value).subscribe({
            next: () => {
              this.router.navigate(['list/parts']);
            }
        });
        } else {
          this.vertiCarService.addPart(form.value).subscribe({
            next: () => {
              this.router.navigate(['list/parts']);
            }
        });
        }
      }
   
}
}
