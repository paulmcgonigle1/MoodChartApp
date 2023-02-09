import { TestBed } from '@angular/core/testing';

import { SpotifyAuthServiceService } from './spotify-auth-service.service';

describe('SpotifyAuthServiceService', () => {
  let service: SpotifyAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
