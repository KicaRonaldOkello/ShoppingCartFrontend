import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isActive = false;
  private mediaMatcher = matchMedia('screen and (max-width: 768px');
  constructor(zone: NgZone) {

    this.mediaMatcher.addListener(mql => 
      zone.run(() => this.mediaMatcher = matchMedia('screen and (max-width: 768px')));
  }

  ngOnInit() {
  }

  clickListener() {
    if(this.isActive){
      this.isActive = false;
    }else{
      this.isActive = true;
    }
  }

  screenWatch(): boolean {
    return this.mediaMatcher.matches;
  }

}
