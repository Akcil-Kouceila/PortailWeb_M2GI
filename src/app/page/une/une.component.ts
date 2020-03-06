import { Component, OnInit, Input } from '@angular/core';
import { Actualite } from '../../models/actualite.model';

@Component({
  selector: 'app-une',
  templateUrl: './une.component.html',
  styleUrls: ['./une.component.css']
})
export class UneComponent implements OnInit {

  @Input()
  une: Actualite;

  constructor() { }

  ngOnInit() {
  }

}
