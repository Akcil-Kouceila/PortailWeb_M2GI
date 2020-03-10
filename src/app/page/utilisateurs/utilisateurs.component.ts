import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  public users: User[];

  constructor(private us: UserService) { }

  ngOnInit() {
    this.us.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }
}
