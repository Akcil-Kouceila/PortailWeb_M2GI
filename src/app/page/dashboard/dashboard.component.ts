import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService, private us: UserService, public router: Router) { }

  ngOnInit() { }

  goNews() {
    this.router.navigate(['news']);
  }

  goTrombinoscope() {
    this.router.navigate(['trombinoscope']);
  }
}
