import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  rutaActual: string;

  constructor(
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) {
    this.rutaActual = this.router.url;
  }

  ngOnInit(): void {
  }

  volver() {
    this.location.back();
  }

  logout() {
    this.authService.logout();
  }

}
