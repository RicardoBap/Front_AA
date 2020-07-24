import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

import { JwtModule } from "@auth0/angular-jwt";
import { environment } from './../../environments/environment';

import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuard } from './auth.guard';
import { LogoutService } from './logout.service';

export function tokenGetter() {
  return localStorage.getItem('token')
}

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    })
  ],
  providers: [
    AuthGuard,
    LogoutService
 ]
})

export class SegurancaModule { }
