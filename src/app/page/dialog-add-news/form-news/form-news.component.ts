import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-news',
  templateUrl: './form-news.component.html',
  styleUrls: ['./form-news.component.css']
})
export class FormNewsComponent implements OnInit, OnChanges {
  @Input() model: any;
  isUpdateMode: boolean;

  articleForm = this.fb.group({
    titre: ['', Validators.required],
    image: ['', Validators.required],
    texte: ['', Validators.required],
    date: '11/03/2020',
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
    this.submit$.emit(this.articleForm);
  }
}
