import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-add-part',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.scss']
})
export class AddPartComponent implements OnInit {
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
