import { Component, OnInit, NgZone, ElementRef, AfterViewInit } from '@angular/core';
import { LoginService } from '../__services__/login.service';
import { LoginModalService } from '../__services__/login-modal.service';
import { EventsService } from '../__services__/events.service';


declare const gapi: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  private clientId = '387912969953-6i9n1a0aiilfdj69jram9b8upj5fjk16.apps.googleusercontent.com';

  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
  ].join(' ');

  public auth2: any;

  isActive = false;
  private mediaMatcher = matchMedia('screen and (max-width: 768px');
  constructor(
    zone: NgZone,
    private element: ElementRef,
    private loginService: LoginService,
    private loginModalService: LoginModalService,
    private events: EventsService
    ) {

    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = matchMedia('screen and (max-width: 768px')));
  }

  ngOnInit() {
  }

  clickListener() {
    if(this.isActive){
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }

  screenWatch(): boolean {
    return this.mediaMatcher.matches;
  }

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: this.scope
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }

  public attachSignin(element) {
    console.log(element);
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        const profile = googleUser.getBasicProfile();
        // console.log('Token || ' + googleUser.getAuthResponse().id_token);
        return this.loginService.login(googleUser.getAuthResponse().id_token).subscribe(data => {
          localStorage.setItem('token', data.jwtToken);
          if (data.isNewUser) {
            return this.loadModal();
          }
          return data; });
      }, (error) => {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  ngAfterViewInit() {
    this.googleInit();
    this.events.subscribe('clickedModal', () => {
      this.loginModalService.hide();
    });
  }

  loadModal() {
    this.loginModalService.reveal();
  }

}
