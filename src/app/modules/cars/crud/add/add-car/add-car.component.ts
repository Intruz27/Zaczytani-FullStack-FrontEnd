import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  @Input() form: FormGroup = {} as FormGroup;
  @Input() isEdit: boolean = false;
  @Output() emitSaveForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.emitSaveForm.emit(this.form);
  }

}
