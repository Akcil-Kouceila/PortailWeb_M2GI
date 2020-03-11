import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit, OnChanges {
  @Input() model: any;
  isUpdateMode: boolean;

  userForm = this.fb.group({
    uid: ['', Validators.required],
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    img: ['', Validators.required],
    email: ['', Validators.required],
    tel: ['', Validators.required],
  });

  @Output('cancel') cancel$: EventEmitter<any>;
  @Output('submit') submit$: EventEmitter<any>;

  constructor(private fb: FormBuilder) {
    this.submit$ = new EventEmitter();
    this.cancel$ = new EventEmitter();
    this.model = {};
  }

  ngOnInit() {}

  ngOnChanges(record) {
    if (record.model && record.model.currentValue) {
      this.model = record.model.currentValue;
      this.isUpdateMode = Boolean(this.model);
    }
  }

  cancel() {
    this.cancel$.emit();
  }

  submit() {
    this.submit$.emit(this.model);
  }
}
