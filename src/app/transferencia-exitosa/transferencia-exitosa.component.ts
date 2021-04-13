import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia-exitosa',
  templateUrl: './transferencia-exitosa.component.html',
  styleUrls: ['./transferencia-exitosa.component.scss']
})
export class TransferenciaExitosaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['menu-principal']);
    }, 3000);
  }

}
