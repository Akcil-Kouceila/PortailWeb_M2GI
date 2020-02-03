import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { UserService } from 'src/app/service/user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  public users: User[];

  constructor(private us: UserService) { }

  ngOnInit() {
    this.us.getUsersMock().subscribe(users => this.users   = users);
  }
}
