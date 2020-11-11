import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  template: `<h1>Dashboard Component</h1>

  <ul>
    <li><a routerLink="user">User</a></li>
    <li> <a routerLink="rights">Rights</a></li>
  </ul>
  <router-outlet></router-outlet>
  `,
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
