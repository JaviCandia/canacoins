import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tab: string = 'dashboard';
  userFire!: User;
  userData!: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getUser();
  }

  selectTab(type: string) {
    this.tab = type;
  }

  getUser() {
    this.userFire = this.authService.userData();

    this.authService.getUsers().subscribe(users => {
      this.userData = users.filter(user => user.email === this.userFire.email)[0];
      console.log(this.userData);
    });
  }
}