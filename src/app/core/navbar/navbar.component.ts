import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ErrorHandlerService } from './../error-handler.service';
import { AuthService } from 'src/app/seguranca/auth.service';
import { LogoutService } from './../../seguranca/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu: boolean 
  
  display;

  constructor(
    public auth: AuthService,
    private logoutService: LogoutService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarNovoAccessToken() {
    this.auth.obterNovoAccessToken()
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate([ '/login' ])
      })
      .catch(erro => this.errorHandler.handle(erro))
  }

}
