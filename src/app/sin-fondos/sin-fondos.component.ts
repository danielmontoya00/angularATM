import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sin-fondos',
  templateUrl: './sin-fondos.component.html',
  styleUrls: ['./sin-fondos.component.scss']
})
export class SinFondosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['menu-principal']);
    }, 3000)
  }

}
