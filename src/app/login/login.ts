import { Component, Inject, OnInit } from '@angular/core';

import {
  IPublicClientApplication,
  AuthenticationResult
} from '@azure/msal-browser';

import {
  MSAL_INSTANCE
} from '@azure/msal-angular';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html'
})
export class LoginComponent implements OnInit {

  isInteractionInProgress = false;
  loginDisplay: boolean = false;
  constructor(
    @Inject(MSAL_INSTANCE)
    private msalService: IPublicClientApplication,
    private http: HttpClient
  ) { }

  async ngOnInit() {

    try {

      // VERY IMPORTANT
      const response: AuthenticationResult | null =
        await this.msalService.handleRedirectPromise();

      if (response) {

        this.msalService.setActiveAccount(response.account);
        this.loginDisplay = true;
        console.log('Login Success');
      }

      const accounts = this.msalService.getAllAccounts();

      if (accounts.length > 0) {

        this.msalService.setActiveAccount(accounts[0]);
        this.loginDisplay = true;
        console.log('Already Logged In');
      }

    } catch (error) {

      console.error(error);
    }

    this.isInteractionInProgress = false;
  }

  async login() {

    // Prevent multiple clicks
    if (this.isInteractionInProgress) {
      return;
    }

    this.isInteractionInProgress = true;

    try {

      await this.msalService.loginRedirect({
        scopes: ['User.Read']
      });
      this.loginDisplay = true;
    } catch (error) {

      console.error(error);
      this.loginDisplay = false;
      this.isInteractionInProgress = false;
    }
  }

  logout() {

    this.msalService.logoutRedirect();
    this.loginDisplay = false;
  }
  callApi() {
    this.msalService.acquireTokenSilent({
      scopes: ['api://b8d33776-4f2a-4e6c-8641-75101193b251/access_as_user']
    }).then(response => {
      debugger;
      console.log('Access token acquired:', response.accessToken);
      this.http.get(
        'https://localhost:7175/api/test', {
        headers: {
          Authorization: `Bearer ${response.accessToken}`,
          'Content-Type': 'application/json'
        }
      }
      ).subscribe({
        next: (res1) => {
          console.log(res1);
        },

        error: (err1) => {
          console.error(err1);
        }
      });
    }).catch(error => {
      console.error('Error acquiring token:', error);
    });
  }
}