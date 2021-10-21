import { TestBed } from '@angular/core/testing';

import { UserBoardService } from './user-board.service';

describe('UserBoardService', () => {
  let service: UserBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
