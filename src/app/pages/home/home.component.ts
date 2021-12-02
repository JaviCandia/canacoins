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
  user!: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getUser();
  }

  selectTab(type: string) {
    this.tab = type;
  }

  getUser() {
    this.user = this.authService.userData();
  }
}
