import { Component, OnInit } from '@angular/core';
import { UpdateRoleService } from 'src/app/__services__/update-role.service';
import { Observable } from 'rxjs';
import { LoginModalService } from 'src/app/__services__/login-modal.service';
import { EventsService } from 'src/app/__services__/events.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {

  constructor(private updateRoleService: UpdateRoleService,
              private events: EventsService,
    ) { }

  ngOnInit() {
  }

  updateUserRole(userRole) {
    this.updateRoleService.updateRole({ role: userRole}).subscribe(data => {
      this.events.broadcast({ name: 'clickedModal', content: { userRole } });
      return data;
    });
  }
}
