import { TestBed } from '@angular/core/testing';

import { UpdateRoleService } from '../update-role.service';

describe('UpdateRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateRoleService = TestBed.get(UpdateRoleService);
    expect(service).toBeTruthy();
  });
});
