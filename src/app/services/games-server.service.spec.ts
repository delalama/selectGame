import { TestBed } from '@angular/core/testing';

import { GamesServerService } from './games-server.service';

describe('GamesServerService', () => {
  let service: GamesServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
