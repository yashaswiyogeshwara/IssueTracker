import { TestBed } from '@angular/core/testing';

import { ProjectBoardService } from './project-board.service';

describe('ProjectBoardService', () => {
  let service: ProjectBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
