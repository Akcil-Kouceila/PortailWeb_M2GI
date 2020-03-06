import { Component, OnInit, Input } from '@angular/core';
import { Actualite } from '../../models/actualite.model';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {

  @Input()
  actu: Actualite;

  constructor() { }

  ngOnInit() {
  }

}
