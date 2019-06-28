import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import {
  ComponentType,
  Portal,
  ComponentPortal,
  DomPortalHost
} from '@angular/cdk/portal';
import { LoginModalComponent } from '../authentication/login-modal/login-modal.component';

@Injectable({
  providedIn: 'root'
})
export class LoginModalService {

  private loadingSpinnerPortal: ComponentPortal<LoginModalComponent>;

  private bodyPortalHost: DomPortalHost;


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    this.loadingSpinnerPortal = new ComponentPortal(LoginModalComponent);

    this.bodyPortalHost = new DomPortalHost(
      document.body,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
      );
  }

  reveal() {
    // 6. Attach the Portal to the PortalHost.
    this.bodyPortalHost.attach(this.loadingSpinnerPortal);
  }

  hide() {
    // 7. Detach the Portal from the PortalHost
    this.bodyPortalHost.detach();
  }
}
